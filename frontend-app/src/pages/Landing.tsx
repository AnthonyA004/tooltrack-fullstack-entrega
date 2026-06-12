import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden bg-background text-on-background min-h-screen">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-inverse-surface fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline">
        <div className="flex justify-between items-center px-margin py-md max-w-7xl mx-auto h-16">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary dark:text-inverse-primary">construction</span>
            <span className="font-headline-md text-headline-md text-primary dark:text-inverse-primary font-bold tracking-tight">ToolTrack</span>
          </div>
          <Link 
            to="/login"
            className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-margin py-2xl flex flex-col items-center text-center">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00288e 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          </div>
          <div className="relative z-10 space-y-md max-w-md">
            <span className="inline-block font-label-md text-label-md text-secondary border border-secondary px-sm py-xs rounded-full bg-secondary-container/20">VERSION 2.0 IS LIVE</span>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background tracking-tight">ToolTrack</h1>
            <p className="font-title-lg text-title-lg text-on-surface-variant leading-relaxed">
              Efficient Tool Management for Modern Teams
            </p>
            <div className="pt-lg">
              <Link 
                to="/login"
                className="block w-full bg-primary text-on-primary py-md rounded-xl font-body-lg text-body-lg font-semibold shadow-sm active:scale-95 transition-transform"
              >
                Get Started
              </Link>
              <p className="mt-md font-label-sm text-label-sm text-outline">No credit card required • 14-day free trial</p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-2xl relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-outline-variant shadow-lg bg-surface-container">
            <img 
              alt="Tool Management Dashboard" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfV3au2b3ZlHZPJnL2uweCBb8w8AeB9coyPn_51NBJefK6NgDOBIa0YET7VgdN4y6Y1xupa1iWWvIj6i-E8WdjS2AEr8kTZG58xY2rYQdYgKgzhj4u0xoR5cHQTrKGepn2TU8ZLid9b-DdLm4Uet5lFPCP35yIXsG4CBoIWTb4Uou4OjtUMIOSTDbmH7u82ILwzWfkWWsdheA6XXEE0ODVG7KFgTdq50fJzS7LlG29KM0YGyjQaqi0-MkwFqGOtTtO5xMGqEtyJzVl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="px-margin py-xl bg-surface-container-low">
          <div className="space-y-sm mb-xl">
            <h2 className="font-headline-md text-headline-md text-on-background">Industrial Precision</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Built for teams that can't afford downtime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Feature 1 */}
            <div className="feature-card p-lg bg-surface border border-outline-variant rounded-xl flex flex-col gap-sm hover:border-primary transition-colors cursor-pointer active:scale-98">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Live Inventory</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Track every asset in real-time with QR and RFID integration across multiple jobsites.</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card p-lg bg-surface border border-outline-variant rounded-xl flex flex-col gap-sm hover:border-primary transition-colors cursor-pointer active:scale-98">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">engineering</span>
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Maintenance Alerts</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Automated scheduling for calibration and repairs based on actual usage hours.</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card p-lg bg-surface border border-outline-variant rounded-xl flex flex-col gap-sm hover:border-primary transition-colors cursor-pointer active:scale-98">
              <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">analytics</span>
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Usage Analytics</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Optimize your equipment spend with detailed reports on tool utilization and loss prevention.</p>
            </div>
          </div>
        </section>

        {/* Tool Categories Grid */}
        <section className="px-margin py-xl">
          <h2 className="font-headline-md text-headline-md text-on-background mb-lg">Tool Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-sm">
            <div className="bg-surface-container-high border border-outline-variant p-md rounded-xl flex flex-col items-center justify-center text-center gap-xs">
              <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
              <span className="font-label-md text-label-md font-bold">Power Tools</span>
            </div>
            <div className="bg-surface-container-high border border-outline-variant p-md rounded-xl flex flex-col items-center justify-center text-center gap-xs">
              <span className="material-symbols-outlined text-primary text-3xl">shield</span>
              <span className="font-label-md text-label-md font-bold">Safety Gear</span>
            </div>
            <div className="bg-surface-container-high border border-outline-variant p-md rounded-xl flex flex-col items-center justify-center text-center gap-xs">
              <span className="material-symbols-outlined text-primary text-3xl">square_foot</span>
              <span className="font-label-md text-label-md font-bold">Measurement</span>
            </div>
            <div className="bg-surface-container-high border border-outline-variant p-md rounded-xl flex flex-col items-center justify-center text-center gap-xs">
              <span className="material-symbols-outlined text-primary text-3xl">handyman</span>
              <span className="font-label-md text-label-md font-bold">Hand Tools</span>
            </div>
            <div className="bg-surface-container-high border border-outline-variant p-md rounded-xl flex flex-col items-center justify-center text-center gap-xs">
              <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
              <span className="font-label-md text-label-md font-bold">Heavy Machinery</span>
            </div>
            <div className="bg-surface-container-high border border-outline-variant p-md rounded-xl flex flex-col items-center justify-center text-center gap-xs">
              <span className="material-symbols-outlined text-primary text-3xl">more_horiz</span>
              <span className="font-label-md text-label-md font-bold">Consumables</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-margin py-2xl mx-margin bg-primary text-on-primary rounded-2xl relative overflow-hidden flex flex-col items-center text-center gap-md">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
          </div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile z-10">Ready to scale?</h2>
          <p className="font-body-md text-body-md opacity-90 max-w-xs z-10">Join 500+ industrial teams managing over 50,000 assets with ToolTrack.</p>
          <Link 
            to="/login"
            className="z-10 bg-secondary-container text-on-secondary-container px-2xl py-md rounded-full font-title-lg text-title-lg font-bold shadow-lg active:scale-95 transition-all"
          >
            Start Free Trial
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-inverse-surface w-full border-t border-outline-variant dark:border-outline mb-16 md:mb-0">
        <div className="flex flex-col md:flex-row justify-between items-center py-xl px-margin gap-md max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-xs">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary">construction</span>
              <span className="font-label-md text-label-md font-bold">ToolTrack Systems</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">Precision in Every Track.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-md">
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors cursor-pointer">Privacy Policy</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors cursor-pointer">Terms of Service</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors cursor-pointer">Contact</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors cursor-pointer">Support</a>
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant">
            © 2024 ToolTrack Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}