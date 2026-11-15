export const CONTACT_NUMBER = '917744009295';

/**
 * Generates a targeted WhatsApp inquiry message for a specific project.
 */
export const getProjectWhatsAppMessage = (projectTitle: string, location: string, config?: string): string => {
    const configText = config ? ` (${config})` : '';
    return `Hi PROPSMART REALTY, I am interested in ${projectTitle}${configText} at ${location}. Please share the official sanctioned floor plans, payment schedule, and current developer offer.`;
};

/**
 * Generates a WhatsApp URL with the given message.
 * @param message - The message to pre-fill in the chat.
 * @returns The formatted WhatsApp URL.
 */
export const getWhatsAppUrl = (message?: string): string => {
    const baseUrl = `https://wa.me/${CONTACT_NUMBER}`;
    if (!message) return baseUrl;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

/**
 * Opens WhatsApp chat in a new tab with the given message.
 * @param message - The message to pre-fill in the chat.
 */
export const openWhatsApp = (message?: string): void => {
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank');
};
