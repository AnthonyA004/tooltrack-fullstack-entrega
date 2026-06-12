export default function Dashboard() {
  return (
    <>
      <header className="mb-lg">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">System Overview</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Real-time status of your tool inventory and sales.</p>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {/* Products Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col gap-base rounded-xl transition-all active:scale-95">
          <div className="flex items-center justify-between text-secondary">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="bg-secondary-container text-on-secondary-container text-[10px] px-1.5 py-0.5 rounded-full font-bold">+12%</span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant mt-xs">Total Products</span>
          <span className="font-headline-md text-headline-md text-on-surface">1,284</span>
        </div>
        
        {/* Categories Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col gap-base rounded-xl transition-all active:scale-95">
          <div className="flex items-center justify-between text-primary">
            <span className="material-symbols-outlined">category</span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant mt-xs">Categories</span>
          <span className="font-headline-md text-headline-md text-on-surface">42</span>
        </div>
        
        {/* Customers Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col gap-base rounded-xl transition-all active:scale-95">
          <div className="flex items-center justify-between text-tertiary">
            <span className="material-symbols-outlined">group</span>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] px-1.5 py-0.5 rounded-full font-bold">+4</span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant mt-xs">Customers</span>
          <span className="font-headline-md text-headline-md text-on-surface">856</span>
        </div>
        
        {/* Revenue Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col gap-base rounded-xl transition-all active:scale-95">
          <div className="flex items-center justify-between text-secondary">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant mt-xs">Revenue</span>
          <span className="font-headline-md text-headline-md text-on-surface">$24.2k</span>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="flex flex-col gap-lg mb-xl">
        {/* Chart Section */}
        <section className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="font-title-lg text-title-lg text-on-surface">Performance Trend</h3>
            <div className="flex gap-base">
              <button className="font-label-sm text-label-sm bg-surface-container px-3 py-1 rounded-full border border-outline-variant">7 Days</button>
              <button className="font-label-sm text-label-sm bg-primary text-on-primary px-3 py-1 rounded-full border border-primary">30 Days</button>
            </div>
          </div>
          
          {/* Placeholder Chart Representation */}
          <div className="h-48 w-full relative">
            <div className="absolute inset-0 flex items-end justify-between gap-base px-2">
              <div className="w-full bg-primary/20 rounded-t-lg h-1/4"></div>
              <div className="w-full bg-primary/20 rounded-t-lg h-1/3"></div>
              <div className="w-full bg-primary/20 rounded-t-lg h-1/2"></div>
              <div className="w-full bg-primary rounded-t-lg h-3/4"></div>
              <div className="w-full bg-primary/20 rounded-t-lg h-2/3"></div>
              <div className="w-full bg-primary/20 rounded-t-lg h-1/2"></div>
              <div className="w-full bg-primary/20 rounded-t-lg h-3/5"></div>
            </div>
          </div>
          <div className="flex justify-between mt-sm text-on-surface-variant font-label-sm text-label-sm">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </section>

        {/* Recent Activity List */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <div className="p-lg border-b border-outline-variant">
            <h3 className="font-title-lg text-title-lg text-on-surface">Critical Alerts</h3>
          </div>
          <div className="flex flex-col">
            {/* Activity Item 1 */}
            <div className="px-lg py-md border-b border-outline-variant flex items-center gap-md hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-error-container">report</span>
              </div>
              <div className="flex-1">
                <p className="font-body-md text-body-md text-on-surface font-semibold">Low Stock: Heavy Drill D-2</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Inventory Level: 2 units</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">2m ago</span>
            </div>
            
            {/* Activity Item 2 */}
            <div className="px-lg py-md border-b border-outline-variant flex items-center gap-md hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">verified</span>
              </div>
              <div className="flex-1">
                <p className="font-body-md text-body-md text-on-surface font-semibold">Maintenance Completed</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Order #9921 resolved.</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">45m ago</span>
            </div>
            
            {/* Activity Item 3 */}
            <div className="px-lg py-md flex items-center gap-md hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person_add</span>
              </div>
              <div className="flex-1">
                <p className="font-body-md text-body-md text-on-surface font-semibold">New Customer Signup</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Elite Construction Ltd.</p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">3h ago</span>
            </div>
          </div>
          <button className="w-full py-md text-center font-label-md text-label-md text-primary bg-surface-container-low border-t border-outline-variant hover:bg-surface-container-high transition-colors">
            View All Alerts
          </button>
        </section>
      </div>
    </>
  );
}