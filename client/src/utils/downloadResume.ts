/**
 * Centralized resume download utility
 * Handles resume download functionality across all pages
 * Currently only supports PDF format
 */
export const downloadResume = (format: 'pdf' = 'pdf') => {
  console.log(`Downloading resume in ${format} format...`);
  
  // Only PDF is currently supported
  if (format !== 'pdf') {
    console.warn('Only PDF format is currently supported');
    return;
  }
  
  // Create download link and trigger download
  const downloadUrl = `/api/download/resume?format=pdf`;
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'Keren_Zhang_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};