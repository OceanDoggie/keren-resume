import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection onDownloadResume={() => console.log('Resume download triggered')} />
    </div>
  );
}