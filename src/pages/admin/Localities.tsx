import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import AdminLayout from '../../components/Admin/AdminLayout';
import { useData } from '../../context/DataContext';
import { Edit, Trash2, Plus, MapPin, TrendingUp, Building2 } from 'lucide-react';
import ImageUpload from '../../components/Admin/ImageUpload';
import { getLocalityImageUrl, SUPPORTED_CITIES } from '../../utils/localityUtils';

const AdminLocalities = () => {
    const { localities, isLoading } = useData();
    const queryClient = useQueryClient();
    const [isEditing, setIsEditing] = useState(false);
    const [currentLocality, setCurrentLocality] = useState<any>(null);
    const [selectedCityFilter, setSelectedCityFilter] = useState<string>('All');

    // Form State
    const [name, setName] = useState('');
    const [city, setCity] = useState('Pune');
    const [zone, setZone] = useState('West Pune');
    const [avgPrice, setAvgPrice] = useState('');
    const [appreciationRate, setAppreciationRate] = useState('7.5');
    const [image, setImage] = useState('');

    const resetForm = () => {
        setName('');
        setCity('Pune');
        setZone('West Pune');
        setAvgPrice('');
        setAppreciationRate('7.5');
        setImage('');
        setCurrentLocality(null);
        setIsEditing(false);
    };

    const handleEdit = (locality: any) => {
        setCurrentLocality(locality);
        setName(locality.name);
        setCity(locality.city || 'Pune');
        setZone(locality.zone || 'West Pune');
        setAvgPrice(locality.avgPriceSqft || '');
        setAppreciationRate(locality.appreciation_rate || locality.appreciationRate || '7.5');
        setImage(locality.image_url || locality.imageUrl || '');
        setIsEditing(true);
    };

    // Mutation to Add/Update Locality
    const mutation = useMutation({
        mutationFn: async (vars: any) => {
            const { cloudflare } = await import('../../services/cloudflare');
            if (vars.id) {
                // Update
                const { error } = await cloudflare.from('localities').update({
                    name: vars.name,
                    city: vars.city,
                    zone: vars.zone,
                    avgPriceSqft: vars.avgPriceSqft,
                    appreciation_rate: vars.appreciation_rate,
                    imageUrl: vars.imageUrl
                }).eq('id', vars.id);
                if (error) throw error;
            } else {
                // Insert
                const { error } = await cloudflare.from('localities').insert([{
                    name: vars.name,
                    city: vars.city,
                    zone: vars.zone,
                    avgPriceSqft: vars.avgPriceSqft,
                    appreciation_rate: vars.appreciation_rate,
                    imageUrl: vars.imageUrl
                }]);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['localities'] });
            resetForm();
            toast.success('Locality saved successfully');
        },
        onError: (err: any) => {
            toast.error("Error saving locality: " + err.message);
        }
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { cloudflare } = await import('../../services/cloudflare');
            const { error } = await cloudflare.from('localities').delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['localities'] });
            toast.success('Locality deleted successfully');
        },
        onError: (err: any) => {
            toast.error("Error deleting locality: " + err.message);
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({
            id: currentLocality?.id,
            name,
            city,
            zone,
            avgPriceSqft: avgPrice ? Number(avgPrice) : null,
            appreciation_rate: appreciationRate ? Number(appreciationRate) : 7.5,
            imageUrl: image
        });
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this locality?")) {
            deleteMutation.mutate(id);
        }
    };

    const filteredLocalities = React.useMemo(() => {
        if (selectedCityFilter === 'All') return localities;
        return localities.filter((l: any) => (l.city || 'Pune').toLowerCase() === selectedCityFilter.toLowerCase());
    }, [localities, selectedCityFilter]);

    return (
        <AdminLayout title="Manage Localities (Market Intel)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Form Section */}
                <div className="md:col-span-1">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-6">
                        <h3 className="font-bold text-slate-800 mb-4">{isEditing ? 'Edit Locality' : 'Add New Locality'}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <ImageUpload
                                    label="Locality Image"
                                    value={image}
                                    onChange={setImage}
                                    bucket="website-assets"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Locality Name</label>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="e.g. Baner"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                                    <select
                                        value={city}
                                        onChange={e => setCity(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                    >
                                        {SUPPORTED_CITIES.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Zone / Belt</label>
                                    <input
                                        value={zone}
                                        onChange={e => setZone(e.target.value)}
                                        placeholder="e.g. West Pune"
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Avg Price (₹/sq.ft)</label>
                                <input
                                    type="number"
                                    value={avgPrice}
                                    onChange={e => setAvgPrice(e.target.value)}
                                    placeholder="e.g. 8500"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Annual Appreciation Rate (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={appreciationRate}
                                    onChange={e => setAppreciationRate(e.target.value)}
                                    placeholder="7.5"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={mutation.isPending}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2"
                                >
                                    {mutation.isPending ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Plus className="w-4 h-4" />
                                            {isEditing ? 'Update' : 'Add'}
                                        </>
                                    )}
                                </button>
                                {isEditing && !mutation.isPending && (
                                    <button type="button" onClick={resetForm} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200">
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* List Section */}
                <div className="md:col-span-2 space-y-4">
                    {/* City Filter Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200">
                        <button
                            onClick={() => setSelectedCityFilter('All')}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                                selectedCityFilter === 'All'
                                    ? 'bg-slate-900 text-white shadow-xs'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            All Cities ({localities.length})
                        </button>
                        {SUPPORTED_CITIES.map(c => {
                            const count = localities.filter((l: any) => (l.city || 'Pune').toLowerCase() === c.toLowerCase()).length;
                            const active = selectedCityFilter.toLowerCase() === c.toLowerCase();
                            return (
                                <button
                                    key={c}
                                    onClick={() => setSelectedCityFilter(c)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
                                        active
                                            ? 'bg-slate-900 text-white shadow-xs'
                                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                                >
                                    <span>{c}</span>
                                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {filteredLocalities.map((loc: any) => (
                        <div key={loc.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <img
                                    src={loc.imageUrl || loc.image_url || getLocalityImageUrl(loc.name)}
                                    alt={loc.name}
                                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-sans font-extrabold text-slate-800 text-lg tracking-tight">{loc.name}</h4>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                                            {loc.city || 'Pune'}
                                        </span>
                                        {loc.zone && (
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                                {loc.zone}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-4 text-sm text-slate-600 mt-1">
                                        <p>Avg: <span className="font-sans font-bold text-slate-900">₹{loc.avgPriceSqft?.toLocaleString() || loc.avg_price_sqft?.toLocaleString() || 'N/A'}/sqft</span></p>
                                        <p className="flex items-center gap-1">
                                            <TrendingUp className="w-3 h-3 text-green-500" />
                                            <span className="font-sans font-bold text-green-600">+{loc.appreciation_rate || loc.appreciationRate}%</span> /yr
                                        </p>
                                        {loc.projectCount !== undefined && (
                                            <p className="text-slate-400">
                                                {loc.projectCount} Projects
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(loc)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                    <Edit className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete(loc.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}

                    {filteredLocalities.length === 0 && !isLoading && (
                        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-slate-700">No localities found in {selectedCityFilter}</h3>
                            <p className="text-slate-500 text-sm mt-1">Add a new locality to track its market value and appreciation.</p>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminLocalities;
