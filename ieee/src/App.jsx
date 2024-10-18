import React from 'react';

function App() {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <h1 className="text-4xl font-bold mb-4">Some pieces of our work</h1>
          <p className="text-gray-400 mb-6">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
          </p>
          <button className="px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300">
            SHOW MORE
          </button>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WEBSITE - spans 2 rows */}
          <div className="border border-gray-700 p-4 row-span-2">
            <img src="https://placehold.co/600x400/6b5b95/6b5b95" alt="Creative landing page" className="mb-4" />
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">WEBSITE</span>
            <h2 className="text-xl font-bold mt-2">Creative landing page</h2>
            <a href="#" className="text-gray-400 mt-2 inline-block">Read more <i className="fas fa-arrow-right"></i></a>
          </div>


            
          {/* DIGITAL MARKETING */}
          <div className="border border-gray-700 p-4">
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">DIGITAL MARKETING</span>
            <h2 className="text-xl font-bold mt-2">Why We Collect User’s Data</h2>
            <a href="#" className="text-gray-400 mt-2 inline-block">Read more <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="border border-gray-700 p-4 row-span-2">
            <img src="https://placehold.co/600x400/6b5b95/6b5b95" alt="Creative landing page" className="mb-4" />
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">USER TESTING</span>
            <h2 className="text-xl font-bold mt-2">Creative landing page</h2>
            <a href="#" className="text-gray-400 mt-2 inline-block">Read more <i className="fas fa-arrow-right"></i></a>
          </div>

          {/* BRANDING */}
          <div className="border border-gray-700 p-4">
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">BRANDING</span>
            <h2 className="text-xl font-bold mt-2">Creative Branding</h2>
            <a href="#" className="text-gray-400 mt-2 inline-block">Read more <i className="fas fa-arrow-right"></i></a>
          </div>

          {/* USER TESTING - spans 2 rows */}
        

          {/* DEVELOPMENT */}
          <div className="border border-gray-700 p-4">
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">DEVELOPMENT</span>
            <h2 className="text-xl font-bold mt-2">Automation. Advanced Level</h2>
            <a href="#" className="text-gray-400 mt-2 inline-block">Read more <i className="fas fa-arrow-right"></i></a>
          </div>

          {/* SEO */}
          <div className="border border-gray-700 p-4">
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">SEO</span>
            <h2 className="text-xl font-bold mt-2">How We Optimized Our SEO</h2>
            <a href="#" className="text-gray-400 mt-2 inline-block">Read more <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
