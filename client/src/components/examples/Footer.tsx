import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 p-8">
        <p className="text-muted-foreground">Footer component preview - scroll down to see the footer</p>
      </div>
      <Footer />
    </div>
  );
}