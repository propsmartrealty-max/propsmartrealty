-- Harden Original Builder Logos in Cloudflare D1

-- 1. Assign authentic hardened vector SVGs to all verified builders
UPDATE builders SET logo = '/images/builders/godrej.svg' WHERE id = 'b-godrej';
UPDATE builders SET logo = '/images/builders/kolte-patil.svg' WHERE id = 'b-kolte-patil';
UPDATE builders SET logo = '/images/builders/vtp-realty.svg' WHERE id = 'b-vtp';
UPDATE builders SET logo = '/images/builders/lodha.svg' WHERE id = 'b-lodha';
UPDATE builders SET logo = '/images/builders/panchshil.svg' WHERE id = 'b-panchshil';
UPDATE builders SET logo = '/images/builders/rohan.svg' WHERE id = 'b-rohan';
UPDATE builders SET logo = '/images/builders/vilas-javdekar.svg' WHERE id = 'b-vilas-javdekar';
UPDATE builders SET logo = '/images/builders/pride-purple.svg' WHERE id = 'b-pride-purple';
UPDATE builders SET logo = '/images/builders/nyati.svg' WHERE id = 'b-nyati';
UPDATE builders SET logo = '/images/builders/gera.svg' WHERE id = 'b-gera';
UPDATE builders SET logo = '/images/builders/kasturi.svg' WHERE id = 'b-kasturi';
UPDATE builders SET logo = '/images/builders/mahindra.svg' WHERE id = 'b-mahindra';
UPDATE builders SET logo = '/images/builders/kumar.svg' WHERE id = 'b-kumar';
UPDATE builders SET logo = '/images/builders/bramhacorp.svg' WHERE id = 'b-bramhacorp';
UPDATE builders SET logo = '/images/builders/amanora.svg' WHERE id = 'b-amanora';
UPDATE builders SET logo = '/images/builders/sobha.svg' WHERE id = 'b-sobha';
UPDATE builders SET logo = '/images/builders/tata.svg' WHERE id = 'b-tata';
UPDATE builders SET logo = '/images/builders/kalpataru.svg' WHERE id = 'b-kalpataru';
UPDATE builders SET logo = '/images/builders/joyville.svg' WHERE id = 'b-joyville';
UPDATE builders SET logo = '/images/builders/shapoorji.svg' WHERE id = 'b-shapoorji';
UPDATE builders SET logo = '/images/builders/kohinoor.svg' WHERE id = 'b-kohinoor';
UPDATE builders SET logo = '/images/builders/paranjape.svg' WHERE id = 'b-paranjape';
UPDATE builders SET logo = '/images/builders/puravankara.svg' WHERE id = 'b-puravankara';
UPDATE builders SET logo = '/images/builders/magarpatta.svg' WHERE id = 'b-magarpatta';
UPDATE builders SET logo = '/images/builders/kundan.svg' WHERE id = 'b-kundan';
UPDATE builders SET logo = '/images/builders/supreme.svg' WHERE id = 'b-supreme-universal';

-- 2. Strip fake/misassigned logos from all unverified builders so they render their own branded card
UPDATE builders SET logo = '' WHERE id NOT IN (
  'b-godrej', 'b-kolte-patil', 'b-vtp', 'b-lodha', 'b-panchshil', 
  'b-rohan', 'b-vilas-javdekar', 'b-pride-purple', 'b-nyati', 'b-gera', 
  'b-kasturi', 'b-mahindra', 'b-kumar', 'b-bramhacorp', 'b-amanora', 
  'b-sobha', 'b-tata', 'b-kalpataru', 'b-joyville', 'b-shapoorji', 
  'b-kohinoor', 'b-paranjape', 'b-puravankara', 'b-magarpatta', 
  'b-kundan', 'b-supreme-universal'
);
