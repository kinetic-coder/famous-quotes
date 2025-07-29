export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content area with top padding to account for fixed navigation */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About TechCorp</h1>
          <p className="text-lg text-gray-600 mb-6">
            This is a test page to demonstrate that the navigation bar appears consistently 
            across all pages in the application.
          </p>
          <p className="text-lg text-gray-600">
            The navigation component is now integrated into the root layout, ensuring it 
            appears on every page without needing to be manually added to each page component.
          </p>
        </div>
      </main>
    </div>
  );
}