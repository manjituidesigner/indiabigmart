// IndiaBigMart B2B Marketplace - Client Script (iOS Style Interactions & Dynamic Vendor Listing)

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ==========================================
  // VENDOR / SUPPLIER DATABASE (Realistic Data)
  // ==========================================
  const VENDOR_DATABASE = {
    'vastu accessories': {
      title: 'Vastu Accessories',
      parentCategory: 'God & Goddess Statues > Vastu Pyramid & Accessories',
      count: '1,000+ products available',
      filterPills: [
        'Vastu Pyramid & Accessories', 'Vastu Kit', 'Vastu Yantras', 
        'Material: Brass', 'Below ₹500', 'Delhi', 'Anand', 
        'Mumbai', 'Khambhat', 'Bengaluru', 'Gujarat', 'Copper Pyramids'
      ],
      vendors: [
        {
          id: 'v1',
          title: 'Dowsing L Rods, For Vastu',
          price: '₹ 965',
          unit: '/Piece',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+7',
          images: [
            'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'Diameter', val: '8 mm' },
            { label: 'Size', val: '12 inch' },
            { label: 'Usage/Application', val: 'Vastu' },
            { label: 'Shape', val: 'L shape' }
          ],
          supplier: 'Vaastu Craft',
          city: 'New Delhi',
          years: '5 yrs',
          rating: 4.4,
          reviews: 156,
          responseRate: '81%',
          phone: '+91 98110 42189'
        },
        {
          id: 'v2',
          title: 'Vastu Helix, Vastu Spiral Helix, Helix',
          price: '₹ 380',
          unit: '/Piece',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+6',
          images: [
            'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'Accessory Type', val: 'Vastu Corners' },
            { label: 'Usage Area', val: 'Factory, Home, Shop' },
            { label: 'Finish', val: 'Antique' },
            { label: 'Purpose', val: 'Health, Wealth, Growth' }
          ],
          supplier: 'Jain Vastu Products And Solution',
          city: 'Indore',
          years: '3 yrs',
          rating: 4.6,
          reviews: 76,
          responseRate: '83%',
          phone: '+91 94250 81230'
        },
        {
          id: 'v3',
          title: 'Aluminum Swastik with Lotus 6 Inches',
          price: '₹ 570',
          unit: '/Piece',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+4',
          images: [
            'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'No. of Pieces', val: '2 pcs.' },
            { label: 'Width', val: '15.24 cm' },
            { label: 'Shape', val: 'Round' },
            { label: 'Suitable For', val: 'Wall Hanging' }
          ],
          supplier: 'Shubh Sanket Vastu',
          city: 'Kalyan',
          years: '14 yrs',
          rating: 3.8,
          reviews: 127,
          responseRate: '79%',
          phone: '+91 98205 61720'
        },
        {
          id: 'v4',
          title: 'Vastu Accessories / Copper Pyramid Energy Generator',
          price: '₹ 3,000',
          unit: '/Piece',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+2',
          images: [
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'Product Type', val: 'Copper Pyramid' },
            { label: 'Material', val: 'Pure Copper' },
            { label: 'Energy Grid', val: '9x9 Harmonic' },
            { label: 'Usage', val: 'Neutralize Geopathic Stress' }
          ],
          supplier: 'Vanmaye Creations',
          city: 'Hyderabad',
          years: '11 yrs',
          rating: 4.8,
          reviews: 92,
          responseRate: '100%',
          phone: '+91 99890 14500'
        },
        {
          id: 'v5',
          title: 'Solid Brass Vastu Tortoise on Glass Plate',
          price: '₹ 450',
          unit: '/Piece',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+5',
          images: [
            'https://images.unsplash.com/photo-1602928321079-5ac89c34aa09?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'Material', val: 'Solid Brass' },
            { label: 'Size', val: '4.5 Inch Plate' },
            { label: 'Finish', val: 'Glossy Gold' },
            { label: 'Placement', val: 'North / East Zone' }
          ],
          supplier: 'AstroVeda Handicrafts',
          city: 'Jaipur',
          years: '8 yrs',
          rating: 4.7,
          reviews: 110,
          responseRate: '92%',
          phone: '+91 94140 22390'
        },
        {
          id: 'v6',
          title: 'Heavy Lead Vastu Helix (South-West Energy Correction)',
          price: '₹ 850',
          unit: '/Set',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+3',
          images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'Material', val: 'Pure Lead Metal' },
            { label: 'Weight', val: '900 grams / Set' },
            { label: 'Quantity', val: 'Set of 3 Helixes' },
            { label: 'Defect Treated', val: 'South-West Extension / Pit' }
          ],
          supplier: 'Riddhi Siddhi Vastu Kendra',
          city: 'Mumbai',
          years: '9 yrs',
          rating: 4.5,
          reviews: 84,
          responseRate: '88%',
          phone: '+91 98210 93450'
        },
        {
          id: 'v7',
          title: 'Brass Shree Yantra (3D Meru Prushtha)',
          price: '₹ 1,450',
          unit: '/Piece',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+8',
          images: [
            'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'Material', val: 'Ashtadhatu Brass' },
            { label: 'Height', val: '3.5 Inch' },
            { label: 'Geometry', val: 'Vedic Sacred Meru' },
            { label: 'Consecration', val: 'Prana Pratishtha Done' }
          ],
          supplier: 'Divine Yantra Mandir',
          city: 'Varanasi',
          years: '12 yrs',
          rating: 4.9,
          reviews: 210,
          responseRate: '95%',
          phone: '+91 94500 78120'
        },
        {
          id: 'v8',
          title: 'Vastu Copper Strips for Energy Neutralization',
          price: '₹ 650',
          unit: '/Roll',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+4',
          images: [
            'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80'
          ],
          specs: [
            { label: 'Thickness', val: '0.2 mm' },
            { label: 'Width', val: '4 Inch' },
            { label: 'Length', val: '10 Metres Roll' },
            { label: 'Usage', val: 'Elemental Balancing' }
          ],
          supplier: 'MahaVastu Solutions',
          city: 'Bengaluru',
          years: '6 yrs',
          rating: 4.6,
          reviews: 94,
          responseRate: '89%',
          phone: '+91 99000 65110'
        }
      ]
    },

    'electric scooter': {
      title: 'Electric Scooter',
      parentCategory: 'Automobile & EV > Electric Two Wheelers',
      count: '1,840+ models & dealers available',
      filterPills: [
        'Commercial Delivery EV', 'Lithium-ion Battery', 'Range 100+ km', 
        'High Speed', 'Low Speed (No License)', 'Delhi', 'Pune', 
        'Bengaluru', 'Ahmedabad', 'Below ₹60,000'
      ],
      vendors: [
        {
          id: 'es1',
          title: 'High Speed Commercial Fleet Electric Scooter (2.5 kWh)',
          price: '₹ 65,000',
          unit: '/Piece',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+8',
          images: ['https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Battery Type', val: 'Lithium Ferro Phosphate (LFP)' },
            { label: 'Certified Range', val: '120 km / Charge' },
            { label: 'Top Speed', val: '65 km/h' },
            { label: 'Payload Capacity', val: '180 kg' }
          ],
          supplier: 'Hero Eco Commercials Ltd',
          city: 'Ludhiana',
          years: '12 yrs',
          rating: 4.8,
          reviews: 320,
          responseRate: '94%',
          phone: '+91 98140 11980'
        },
        {
          id: 'es2',
          title: 'Heavy Duty Cargo Electric Delivery Scooter with Basket',
          price: '₹ 58,000',
          unit: '/Piece',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+5',
          images: ['https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Motor Power', val: '1500 Watt BLDC' },
            { label: 'Battery', val: 'Swappable 60V 30Ah' },
            { label: 'Brakes', val: 'Front Disc, Rear Drum' },
            { label: 'Charging Time', val: '3.5 Hours Fast Charge' }
          ],
          supplier: 'Volta Mobility India',
          city: 'Pune',
          years: '6 yrs',
          rating: 4.6,
          reviews: 142,
          responseRate: '88%',
          phone: '+91 98900 45220'
        },
        {
          id: 'es3',
          title: 'Dual Battery Long-Range E-Scooter (160km Range)',
          price: '₹ 78,500',
          unit: '/Piece',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+6',
          images: ['https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Battery Capacity', val: '3.2 kWh Dual Pack' },
            { label: 'Digital Display', val: '7-inch Smart TFT' },
            { label: 'Regenerative Brake', val: 'Yes' },
            { label: 'Warranty', val: '3 Years / 50,000 km' }
          ],
          supplier: 'Ampere Energy Systems',
          city: 'Bengaluru',
          years: '9 yrs',
          rating: 4.9,
          reviews: 215,
          responseRate: '96%',
          phone: '+91 99000 88200'
        },
        {
          id: 'es4',
          title: 'Non-RTO Low Speed Electric Scooter for Colleges & Camps',
          price: '₹ 42,000',
          unit: '/Piece',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+4',
          images: ['https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Max Speed', val: '25 km/h (No License)' },
            { label: 'Range', val: '75 km' },
            { label: 'Tubeless Tyres', val: '10x3.0 Heavy' },
            { label: 'Remote Key', val: 'Anti-Theft Alarm' }
          ],
          supplier: 'Greaves E-Ride Solutions',
          city: 'Delhi NCR',
          years: '7 yrs',
          rating: 4.5,
          reviews: 89,
          responseRate: '91%',
          phone: '+91 98100 76340'
        }
      ]
    },

    'tmt bars': {
      title: 'TMT Steel Bars',
      parentCategory: 'Building & Construction > Construction Steel',
      count: '3,200+ mills & stockists available',
      filterPills: [
        'Fe 550D Grade', 'Primary Producer (SAIL/TATA/Jindal)', 'Secondary TMT', 
        'Corrosion Resistant (CRS)', '8mm to 32mm', 'Raipur', 
        'Durgapur', 'Mumbai', 'Below ₹55,000/MT'
      ],
      vendors: [
        {
          id: 'tmt1',
          title: 'Fe 550D Primary Billet TMT Steel Bars (12mm - 32mm)',
          price: '₹ 54,000',
          unit: '/Metric Ton',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+6',
          images: ['https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Grade', val: 'Fe 550D High Ductility' },
            { label: 'Standards', val: 'IS 1786 : 2008 Certified' },
            { label: 'Bendability', val: 'Mandrel 3D without cracks' },
            { label: 'Application', val: 'High-Rise & Bridges' }
          ],
          supplier: 'Shree Mahavir Ispat Raipur',
          city: 'Raipur',
          years: '16 yrs',
          rating: 4.8,
          reviews: 412,
          responseRate: '95%',
          phone: '+91 94252 11990'
        },
        {
          id: 'tmt2',
          title: 'Corrosion Resistant (CRS) Epoxy Coated TMT Rebars',
          price: '₹ 58,500',
          unit: '/Metric Ton',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+4',
          images: ['https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Coating', val: 'Fusion Bonded Epoxy (FBE)' },
            { label: 'Coastal Resistance', val: '5x Longer Life' },
            { label: 'Sizes', val: '8mm, 10mm, 12mm, 16mm' },
            { label: 'Test Certificate', val: 'Provided with each lot' }
          ],
          supplier: 'Coastal Steel & Infrastructure',
          city: 'Mumbai',
          years: '11 yrs',
          rating: 4.7,
          reviews: 188,
          responseRate: '92%',
          phone: '+91 98200 45670'
        }
      ]
    }
  };

  // Helper function to generate dynamic vendors for any searched term or category
  function getVendorsForCategory(categoryName) {
    const key = categoryName.trim().toLowerCase();
    
    // Check direct or partial match in VENDOR_DATABASE
    for (const k in VENDOR_DATABASE) {
      if (key.includes(k) || k.includes(key) || (key.includes('statue') && k.includes('vastu')) || (key.includes('cow') && k.includes('vastu'))) {
        return VENDOR_DATABASE[k];
      }
    }

    // Dynamic Fallback Generator for other items
    return {
      title: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
      parentCategory: 'Industrial Supplies & Commercial Products',
      count: '850+ verified suppliers available',
      filterPills: [
        'TrustSEAL Verified', 'Direct Manufacturer', 'Ready Stock', 
        'Delhi NCR', 'Mumbai', 'Ahmedabad', 'Bengaluru', 'Coimbatore', 
        'Verified Exporter', 'Best Value'
      ],
      vendors: [
        {
          id: 'dyn1',
          title: `Heavy Duty Industrial ${categoryName} (Commercial Grade)`,
          price: '₹ 2,450',
          unit: '/Piece',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+6',
          images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Quality Grade', val: 'ISO 9001 Certified' },
            { label: 'Warranty', val: '1 Year Full Replacement' },
            { label: 'Delivery', val: 'Pan-India 3-5 Days' },
            { label: 'Supply Capacity', val: '5,000 Units / Month' }
          ],
          supplier: 'Apex National Industries',
          city: 'Ahmedabad',
          years: '12 yrs',
          rating: 4.8,
          reviews: 194,
          responseRate: '94%',
          phone: '+91 98250 88120'
        },
        {
          id: 'dyn2',
          title: `Premium Engineered ${categoryName} (Custom Specifications)`,
          price: '₹ 1,850',
          unit: '/Set',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+4',
          images: ['https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Material', val: 'High Strength Alloy / Raw' },
            { label: 'Test Report', val: 'Govt. Approved Lab' },
            { label: 'Packaging', val: 'Heavy Duty Wooden Box' },
            { label: 'MOQ', val: '5 Units' }
          ],
          supplier: 'Bharat Tech Manufacturers',
          city: 'Delhi NCR',
          years: '9 yrs',
          rating: 4.6,
          reviews: 142,
          responseRate: '88%',
          phone: '+91 98110 33450'
        },
        {
          id: 'dyn3',
          title: `Wholesale Direct Dispatch ${categoryName}`,
          price: '₹ 950',
          unit: '/Piece',
          badge: 'Leading Supplier',
          badgeColor: 'blue',
          photosCount: '+5',
          images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Standard', val: 'BIS / Commercial Grade' },
            { label: 'Payment', val: '100% Escrow Supported' },
            { label: 'Dispatch', val: 'Within 24 Hours' },
            { label: 'Origin', val: '100% Made in India' }
          ],
          supplier: 'Swadeshi Precision Works',
          city: 'Pune',
          years: '14 yrs',
          rating: 4.9,
          reviews: 268,
          responseRate: '98%',
          phone: '+91 98900 66120'
        },
        {
          id: 'dyn4',
          title: `Automatic Smart ${categoryName} (High Efficiency Series)`,
          price: '₹ 4,800',
          unit: '/Unit',
          badge: 'Star Supplier',
          badgeColor: 'amber',
          photosCount: '+7',
          images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80'],
          specs: [
            { label: 'Energy Class', val: '5 Star Energy Saver' },
            { label: 'Controls', val: 'Microprocessor Digital' },
            { label: 'Operating Temp', val: '-10°C to 55°C' },
            { label: 'Safety', val: 'Overload Protection' }
          ],
          supplier: 'Kalyan Automation & Power',
          city: 'Bengaluru',
          years: '8 yrs',
          rating: 4.7,
          reviews: 97,
          responseRate: '91%',
          phone: '+91 99000 54100'
        }
      ]
    };
  }

  // ==========================================
  // VIEW NAVIGATION (Home View <-> Listing View)
  // ==========================================
  const homeView = document.getElementById('home-view');
  const listingView = document.getElementById('listing-view');
  const backToHomeBtn = document.getElementById('back-to-home-btn');
  const brandLogo = document.querySelector('header a[href="/"]');

  window.showHomeView = function() {
    if (listingView) listingView.classList.add('hidden');
    if (homeView) homeView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Returned to IndiaBigMart Home');
  };

  if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showHomeView();
    });
  }

  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      showHomeView();
    });
  }

  // Grid / List View Toggle State
  let isListView = false;
  const viewModeGridBtn = document.getElementById('view-mode-grid');
  const viewModeListBtn = document.getElementById('view-mode-list');
  const cardsContainer = document.getElementById('vendor-cards-container');

  if (viewModeGridBtn && viewModeListBtn && cardsContainer) {
    viewModeGridBtn.addEventListener('click', () => {
      isListView = false;
      viewModeGridBtn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
      viewModeGridBtn.classList.remove('text-slate-500');
      viewModeListBtn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
      viewModeListBtn.classList.add('text-slate-500');

      cardsContainer.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300';
      if (window.currentListingData) renderVendorCards(window.currentListingData.vendors);
    });

    viewModeListBtn.addEventListener('click', () => {
      isListView = true;
      viewModeListBtn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
      viewModeListBtn.classList.remove('text-slate-500');
      viewModeGridBtn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
      viewModeGridBtn.classList.add('text-slate-500');

      cardsContainer.className = 'flex flex-col gap-5 transition-all duration-300';
      if (window.currentListingData) renderVendorCards(window.currentListingData.vendors);
    });
  }

  // Render Vendor Cards (matching user screenshot with exact layout & modern iOS aesthetic)
  function renderVendorCards(vendors) {
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';

    vendors.forEach(v => {
      const card = document.createElement('div');
      
      if (!isListView) {
        // GRID CARD LAYOUT
        card.className = 'bg-white rounded-3xl p-4 sm:p-5 shadow-ios hover:shadow-ios-lg transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group';
        
        card.innerHTML = `
          <div>
            <!-- Image Frame & Badges -->
            <div class="relative h-56 rounded-2xl bg-slate-50 overflow-hidden mb-4 border border-slate-100 flex items-center justify-center">
              <img src="${v.images[0]}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
              <!-- Supplier Type Badge -->
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm ${v.badgeColor === 'blue' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                ${v.badge}
              </span>

              <!-- Photo Count Pill -->
              <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold flex items-center gap-1">
                <i data-lucide="image" class="w-3 h-3"></i>
                <span>${v.photosCount}</span>
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition leading-snug line-clamp-2 min-h-[40px]">
              ${v.title}
            </h3>

            <!-- Price -->
            <div class="mt-2 flex items-baseline gap-1.5">
              <span class="text-xl font-extrabold text-slate-900">${v.price}</span>
              <span class="text-xs text-slate-400 font-medium">${v.unit}</span>
            </div>

            <!-- Primary Contact Supplier CTA -->
            <button 
              type="button" 
              onclick="openQuoteModal('${v.title.replace(/'/g, "\\'")}', '${v.price} ${v.unit}', '${v.supplier.replace(/'/g, "\\'")}')" 
              class="w-full mt-3.5 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm transition active:scale-95 flex items-center justify-center gap-1.5"
            >
              <i data-lucide="send" class="w-3.5 h-3.5"></i>
              <span>Contact Supplier</span>
            </button>

            <!-- Technical Specifications Table -->
            <div class="mt-4 bg-slate-50/80 rounded-2xl p-3 border border-slate-100/90 text-xs">
              <div class="space-y-1.5 divide-y divide-slate-100/80">
                ${v.specs.map(s => `
                  <div class="flex items-center justify-between pt-1 text-[11px]">
                    <span class="text-slate-400 font-medium">${s.label}</span>
                    <span class="text-slate-700 font-bold text-right truncate max-w-[120px]">${s.val}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Supplier Profile Info Footer -->
          <div class="mt-5 pt-3.5 border-t border-slate-100">
            <div class="flex items-center justify-between mb-1">
              <h4 class="text-xs font-bold text-slate-900 hover:text-brand-600 cursor-pointer truncate max-w-[170px]" title="${v.supplier}">
                ${v.supplier}
              </h4>
            </div>

            <div class="text-[11px] text-slate-400 mb-2">
              ${v.city} &bull; ${v.years}
            </div>

            <div class="flex items-center justify-between text-[11px] mb-3">
              <span class="inline-flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <i data-lucide="shield-check" class="w-3 h-3 text-amber-500"></i> TrustSEAL
              </span>
              <span class="text-slate-500 font-medium">
                ${v.responseRate} Response
              </span>
            </div>

            <div class="flex items-center justify-between text-[11px] text-slate-500 mb-3">
              <span class="flex items-center gap-1 text-amber-500 font-bold">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i> ${v.rating} <span class="text-slate-400 font-normal">(${v.reviews})</span>
              </span>
            </div>

            <!-- Call Now Action Button -->
            <button 
              type="button" 
              onclick="callSupplier('${v.phone}', '${v.supplier.replace(/'/g, "\\'")}')" 
              class="w-full py-2 rounded-xl border border-teal-600 text-teal-700 hover:bg-teal-50 text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
              <span>Call Now</span>
            </button>
          </div>
        `;
      } else {
        // LIST VIEW CARD LAYOUT (Wide Horizontal Row)
        card.className = 'bg-white rounded-3xl p-5 shadow-ios hover:shadow-ios-lg transition-all duration-300 border border-slate-200/80 flex flex-col lg:flex-row gap-6 items-stretch';
        
        card.innerHTML = `
          <!-- Image -->
          <div class="relative w-full lg:w-64 h-56 rounded-2xl bg-slate-50 overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center">
            <img src="${v.images[0]}" alt="${v.title}" class="w-full h-full object-cover" />
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold ${v.badgeColor === 'blue' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
              ${v.badge}
            </span>
            <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold">
              ${v.photosCount} Photos
            </span>
          </div>

          <!-- Middle: Specs & Title -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 hover:text-brand-600 transition">
                ${v.title}
              </h3>
              <div class="mt-2 flex items-baseline gap-2">
                <span class="text-2xl font-extrabold text-slate-900">${v.price}</span>
                <span class="text-xs text-slate-400 font-medium">${v.unit}</span>
              </div>

              <!-- Specs Grid (2 Columns) -->
              <div class="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                ${v.specs.map(s => `
                  <div class="flex items-center justify-between">
                    <span class="text-slate-400 font-medium">${s.label}:</span>
                    <span class="text-slate-800 font-bold">${s.val}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right: Supplier & Actions -->
          <div class="w-full lg:w-72 bg-slate-50/70 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between shrink-0">
            <div>
              <h4 class="text-sm font-bold text-slate-900">${v.supplier}</h4>
              <div class="text-xs text-slate-400 mt-0.5">${v.city} &bull; ${v.years} in Business</div>

              <div class="mt-3 flex items-center gap-2">
                <span class="inline-flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 text-xs">
                  <i data-lucide="shield-check" class="w-3 h-3 text-amber-500"></i> TrustSEAL
                </span>
                <span class="text-xs text-slate-500">${v.responseRate} Response</span>
              </div>

              <div class="mt-2 text-xs font-bold text-amber-500 flex items-center gap-1">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i> ${v.rating} <span class="text-slate-400 font-normal">(${v.reviews} Reviews)</span>
              </div>
            </div>

            <div class="space-y-2 mt-5">
              <button 
                type="button" 
                onclick="openQuoteModal('${v.title.replace(/'/g, "\\'")}', '${v.price} ${v.unit}', '${v.supplier.replace(/'/g, "\\'")}')" 
                class="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm transition flex items-center justify-center gap-1.5"
              >
                <i data-lucide="send" class="w-3.5 h-3.5"></i>
                <span>Contact Supplier</span>
              </button>
              <button 
                type="button" 
                onclick="callSupplier('${v.phone}', '${v.supplier.replace(/'/g, "\\'")}')" 
                class="w-full py-2 rounded-xl border border-teal-600 text-teal-700 hover:bg-teal-50 text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
                <span>Call Now</span>
              </button>
            </div>
          </div>
        `;
      }

      cardsContainer.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Master Function: Show Listing View for any Category / Product
  window.showListingView = function(categoryName, customParent) {
    const data = getVendorsForCategory(categoryName);
    window.currentListingData = data;

    // Update Headings & Breadcrumbs
    const titleEl = document.getElementById('listing-title');
    const countEl = document.getElementById('listing-count');
    const parentEl = document.getElementById('listing-breadcrumb-parent');
    const currentEl = document.getElementById('listing-breadcrumb-current');
    const pillsRow = document.getElementById('listing-filter-pills-row');

    if (titleEl) titleEl.textContent = data.title;
    if (countEl) countEl.textContent = data.count;
    if (parentEl) parentEl.textContent = customParent || data.parentCategory;
    if (currentEl) currentEl.textContent = data.title;

    // Populate Filter Pills
    if (pillsRow) {
      pillsRow.innerHTML = `
        <button type="button" class="shrink-0 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white flex items-center gap-1.5 shadow-sm">
          <i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i>
          <span>Filters</span>
        </button>
      `;

      data.filterPills.forEach(pillText => {
        const pBtn = document.createElement('button');
        pBtn.type = 'button';
        pBtn.className = 'shrink-0 px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 transition active:scale-95';
        pBtn.textContent = pillText;
        pBtn.addEventListener('click', () => {
          showToast(`Filtered by: ${pillText}`);
          // Re-filter cards
          if (pillText.includes('Below')) {
            const filtered = data.vendors.filter(v => parseInt(v.price.replace(/[^\d]/g, '')) < 1000);
            renderVendorCards(filtered.length ? filtered : data.vendors);
          } else if (pillText === 'Delhi' || pillText === 'Mumbai' || pillText === 'Indore' || pillText === 'Kalyan' || pillText === 'Hyderabad') {
            const filtered = data.vendors.filter(v => v.city.toLowerCase().includes(pillText.toLowerCase()));
            renderVendorCards(filtered.length ? filtered : data.vendors);
          }
        });
        pillsRow.appendChild(pBtn);
      });
    }

    // Render Cards
    renderVendorCards(data.vendors);

    // Switch View
    if (homeView) homeView.classList.add('hidden');
    if (listingView) listingView.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Showing suppliers for: ${data.title}`);
  };

  // Attach Click Handlers to All Trending Cards on Home
  const trendingCards = document.querySelectorAll('.trending-card');
  trendingCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked quote button directly
      const title = card.querySelector('h3')?.textContent.trim();
      if (title) {
        showListingView(title);
      }
    });
  });

  // Call Supplier Helper
  window.callSupplier = function(phone, supplier) {
    showToast(`Connecting to ${supplier}: ${phone}`);
  };

  // Sort Selector Handler
  const sortSelect = document.getElementById('listing-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      if (!window.currentListingData) return;
      let sorted = [...window.currentListingData.vendors];
      if (e.target.value === 'price-low') {
        sorted.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
      } else if (e.target.value === 'price-high') {
        sorted.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
      } else if (e.target.value === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
      }
      renderVendorCards(sorted);
      showToast(`Sorted by: ${e.target.options[e.target.selectedIndex].text}`);
    });
  }

  // ==========================================
  // EXISTING MODAL & DROPDOWN LOGIC
  // ==========================================

  // City Selector Dropdown
  const cityBtn = document.getElementById('city-select-btn');
  const cityDropdown = document.getElementById('city-dropdown');
  const selectedCityLabel = document.getElementById('selected-city-label');

  if (cityBtn && cityDropdown) {
    cityBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cityDropdown.classList.toggle('hidden');
    });

    document.querySelectorAll('.city-option').forEach(item => {
      item.addEventListener('click', () => {
        const city = item.getAttribute('data-city');
        if (selectedCityLabel) selectedCityLabel.textContent = city;
        cityDropdown.classList.add('hidden');
        showToast(`Location set to: ${city}`);
      });
    });

    document.addEventListener('click', (e) => {
      if (!cityDropdown.contains(e.target) && !cityBtn.contains(e.target)) {
        cityDropdown.classList.add('hidden');
      }
    });
  }

  // Search Category Dropdown
  const categoryBtn = document.getElementById('search-category-btn');
  const categoryDropdown = document.getElementById('search-category-dropdown');
  const selectedCategoryLabel = document.getElementById('selected-category-label');

  if (categoryBtn && categoryDropdown) {
    categoryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      categoryDropdown.classList.toggle('hidden');
    });

    document.querySelectorAll('.search-cat-option').forEach(item => {
      item.addEventListener('click', () => {
        const cat = item.getAttribute('data-cat');
        if (selectedCategoryLabel) selectedCategoryLabel.textContent = cat;
        categoryDropdown.classList.add('hidden');
        if (cat !== 'All') {
          showListingView(cat);
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!categoryDropdown.contains(e.target) && !categoryBtn.contains(e.target)) {
        categoryDropdown.classList.add('hidden');
      }
    });
  }

  // Quote / Get Best Price Modal Logic
  const quoteModal = document.getElementById('quote-modal');
  const quoteModalClose = document.getElementById('close-quote-modal');
  const quoteProductTitle = document.getElementById('modal-product-title');
  const quoteProductPrice = document.getElementById('modal-product-price');
  const quoteSupplierName = document.getElementById('modal-supplier-name');
  const quoteForm = document.getElementById('quote-form');

  window.openQuoteModal = function(productName, price, supplier) {
    if (quoteProductTitle) quoteProductTitle.textContent = productName;
    if (quoteProductPrice) quoteProductPrice.textContent = price;
    if (quoteSupplierName) quoteSupplierName.textContent = supplier || 'Verified Manufacturer';
    if (quoteModal) {
      quoteModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  };

  if (quoteModalClose) {
    quoteModalClose.addEventListener('click', () => {
      quoteModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        quoteModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mobile = document.getElementById('quote-mobile')?.value;
      if (!mobile || mobile.length < 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
      }
      quoteModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      quoteForm.reset();
      showToast('Price Quote Request Sent! Suppliers will contact you shortly.');
    });
  }

  // Post Requirement Modal Logic
  const rfqModal = document.getElementById('rfq-modal');
  const rfqModalClose = document.getElementById('close-rfq-modal');
  const rfqForm = document.getElementById('rfq-form');
  const postReqBtns = document.querySelectorAll('.trigger-rfq-modal');

  postReqBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (rfqModal) {
        rfqModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  if (rfqModalClose) {
    rfqModalClose.addEventListener('click', () => {
      rfqModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  if (rfqModal) {
    rfqModal.addEventListener('click', (e) => {
      if (e.target === rfqModal) {
        rfqModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      rfqModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      rfqForm.reset();
      showToast('Requirement posted successfully! Matching suppliers have been notified.');
    });
  }

  // Trending on IndiaBigMart - Filter & Pagination Controls
  const filterBtns = document.querySelectorAll('.trending-filter-btn');
  const homeTrendingCards = document.querySelectorAll('.trending-card');
  const prevBtn = document.getElementById('trending-prev-btn');
  const nextBtn = document.getElementById('trending-next-btn');
  let currentTrendingPage = 1;
  const totalTrendingPages = 2;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-white', 'text-slate-900', 'font-bold', 'shadow-sm');
        b.classList.add('hover:bg-white/10');
      });
      btn.classList.add('bg-white', 'text-slate-900', 'font-bold', 'shadow-sm');
      btn.classList.remove('hover:bg-white/10');

      const filter = btn.getAttribute('data-filter');
      homeTrendingCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.classList.add('animate-in', 'fade-in', 'zoom-in-95');
        } else {
          card.classList.add('hidden');
        }
      });
      showToast(`Showing: ${btn.textContent.trim()}`);
    });
  });

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentTrendingPage = currentTrendingPage > 1 ? currentTrendingPage - 1 : totalTrendingPages;
      showToast(`Trending Products (Page ${currentTrendingPage} of ${totalTrendingPages})`);
      const grid = document.getElementById('trending-grid');
      if (grid) {
        grid.classList.add('opacity-50');
        setTimeout(() => grid.classList.remove('opacity-50'), 200);
      }
    });

    nextBtn.addEventListener('click', () => {
      currentTrendingPage = currentTrendingPage < totalTrendingPages ? currentTrendingPage + 1 : 1;
      showToast(`Trending Products (Page ${currentTrendingPage} of ${totalTrendingPages})`);
      const grid = document.getElementById('trending-grid');
      if (grid) {
        grid.classList.add('opacity-50');
        setTimeout(() => grid.classList.remove('opacity-50'), 200);
      }
    });
  }

  // Seller Registration Quick Form
  const sellerQuickForm = document.getElementById('seller-quick-form');
  if (sellerQuickForm) {
    sellerQuickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sellerQuickForm.reset();
      showToast('Thank you! Our onboarding team will connect with you to register your business.');
    });
  }

  // Search Input Handler (Redirects to Listing View with that keyword)
  const mainSearchForm = document.getElementById('main-search-form');
  const mainSearchInput = document.getElementById('main-search-input');
  if (mainSearchForm && mainSearchInput) {
    mainSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = mainSearchInput.value.trim();
      if (!query) return;
      showListingView(query);
    });
  }

  // Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeMobileDrawer = document.getElementById('close-mobile-drawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  if (closeMobileDrawer && mobileDrawer) {
    closeMobileDrawer.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Category Tab Pill Filter on Top Ribbon
  const categoryPills = document.querySelectorAll('.cat-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('bg-slate-900', 'text-white', 'shadow-sm'));
      categoryPills.forEach(p => p.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200/80'));
      
      pill.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200/80');
      pill.classList.add('bg-slate-900', 'text-white', 'shadow-sm');

      const pillText = pill.textContent.trim();
      if (pillText === 'All Sectors') {
        showHomeView();
      } else {
        // If on listing view, update listing view; if on home view, smooth scroll to section
        const targetId = pill.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl && !homeView.classList.contains('hidden')) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          showListingView(pillText);
        }
      }
    });
  });

  // Re-run Lucide icons
  window.refreshIcons = () => {
    if (window.lucide) window.lucide.createIcons();
  };

  // Toast notification helper
  function showToast(message) {
    const toast = document.getElementById('ios-toast');
    const toastMsg = document.getElementById('ios-toast-msg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3800);
  }

  window.showToast = showToast;
});
