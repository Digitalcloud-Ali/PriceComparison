export const DETAILED_SPECS = {
  'XBOX_X': {
    dimensions: '15.1 x 15.1 x 30.1 cm',
    weight: '4.45 kg',
    processor: {
      type: 'Custom AMD Zen 2',
      cores: 8,
      threads: 16,
      clockSpeed: '3.8 GHz'
    },
    graphics: {
      type: 'Custom RDNA 2',
      computeUnits: 52,
      teraflops: 12.15
    },
    memory: {
      type: 'GDDR6',
      size: '16GB',
      bandwidth: '320-bit'
    },
    storage: {
      type: 'Custom NVMe SSD',
      capacity: '1TB',
      expandable: true,
      expandableType: 'Seagate Expansion Card'
    },
    connectivity: {
      hdmi: 'HDMI 2.1',
      usb: '3x USB 3.1 Gen 1',
      ethernet: 'Gigabit Ethernet',
      wireless: 'Wi-Fi 6 (802.11ax)'
    }
  },
  'VITAMIX_PRO': {
    motor: {
      power: '2.2 HP',
      rpm: '37,000',
      cooling: 'Thermal protection system'
    },
    container: {
      capacity: '64 oz',
      material: 'BPA-free Eastman Tritan',
      blades: 'Hardened stainless steel'
    },
    programs: [
      'Smoothies',
      'Hot Soups',
      'Dips & Spreads',
      'Frozen Desserts',
      'Self-Cleaning'
    ],
    warranty: '7 years full warranty'
  }
}; 