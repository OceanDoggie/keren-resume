import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={() => console.log('Resume download triggered')} />
      <div className="pt-20 p-8">
        <p className="text-muted-foreground">Navigation component preview - try the dropdowns and buttons above</p>
      </div>
    </div>
  );
}