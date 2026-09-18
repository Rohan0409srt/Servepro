// Mirrors the exact nav structure + labels + link targets from the original
// html/index.html <nav class="main-menu"> markup. Order and wording preserved.
const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      {
        label: 'Soft Services',
        path: '/soft-services',
        submenu: [
          { label: 'Housekeeping Services', path: '/soft-service-housekeeping' },
          { label: 'Pantry Services', path: '/soft-service-pantryservices' },
          { label: 'Guest House Management', path: '/soft-service-guestmangementservices' },
          { label: 'Event Management Service', path: '/soft-service-eventmanagementservice' },
          { label: 'Warehouse Management', path: '/soft-service-warehousemangement' },
        ],
      },
      {
        label: 'Business Support Services',
        path: '/business-support-service',
        submenu: [
          { label: 'Reception Services', path: '/business-support-receptionservice' },
          { label: 'Helpdesk Services', path: '/business-support-helpdesk' },
          { label: 'Office Support Staff', path: '/business-support-officesupportstaff' },
          { label: 'Mailroom Service', path: '/business-support-mailroomservice' },
          { label: 'Transportation Management', path: '/business-support-transportationmangementservice' },
          { label: 'Staffing & Payroll Service', path: '/business-support-staffingandpayrollservice' },
        ],
      },
      {
  label: "Technical Services",
  path: "/technical-service",
  submenu: [
    {
      label: "Mechanical & Electrical",
      path: "/technical-service-mechnical-electrical",
    },
    {
      label: "Operation and Maintenance",
      path: "/technical-service-operationandmaintance",
    },
    {
      label: "Plumbing and Carpentry",
      path: "/technical-service-plumbingandcarpentry",
    },
    {
      label: "HVAC",
      path: "/technical-service-hvac",
    },
    {
      label: "Water Treatment Systems",
      path: "/technical-service-watertreatementsystems",
    },
  ],
},
      {
        label: 'Pest Control Services',
        path: '/pest-control-service',
        submenu: [
          { label: 'General Disinfestation', path: '/pest-control-service-generaldisfection' },
          { label: 'Fumigation', path: '/pest-control-service-fumigation' },
          { label: 'Anti-Larvae Treatment', path: '/pest-control-service-anitlarvaetreatement' },
          { label: 'Bird Netting', path: '/pest-control-service-birdnetting' },
          { label: 'Rodent Control', path: '/pest-control-service-rodantcontrol' },
          { label: 'Termite Control', path: '/pest-control-service-termitecontrolservice' },
        ],
      },
      {
        label: 'Gardening Services',
        path: '/gardening-service',
        submenu: [
          { label: 'Garden Development', path: '/gardening-service-gardendevelopment' },
          { label: 'Landscaping', path: '/gardening-service-landingservice' },
          { label: 'Garden Maintenance', path: '/gardening-service-gardenmaintenanceservice' },
          { label: 'Pot Plant', path: '/gardening-service-plotplantingservice' },
          { label: 'Vertical Garden', path: '/gardening-service-verticalgardeningservice' },
        ],
      },
      {
        label: 'Specialized Cleaning Services',
        path: '/specialized-cleaning-service',
        submenu: [
          { label: 'Home Cleaning', path: '/specialized-cleaning-service-homecleaning' },
          { label: 'Office Deep Cleaning', path: '/specialized-cleaning-service-officedeepcleaning' },
          { label: 'Carpet Shampooing', path: '/specialized-cleaning-service-carpetshampooing' },
          { label: 'Upholstery Shampooing', path: '/specialized-cleaning-service-upholsteryshampooingservice' },
          { label: 'Upholstery Steaming', path: '/specialized-cleaning-service-upholsterysteamingservice' },
          { label: 'Wooden / Marble Polishing', path: '/specialized-cleaning-service-w-m-polishing' },
          { label: 'Glass / Façade Cleaning', path: '/specialized-cleaning-service-g-f-cleaning' },
          { label: 'Warehouse Cleaning', path: '/specialized-cleaning-service-warehousecleaning' },
          { label: 'Jet Cleaning', path: '/specialized-cleaning-service-jetcleaning' },
          { label: 'Water Tank Cleaning', path: '/specialized-cleaning-service-watertankcleaning' },
        ],
      },
      { label: 'IT Support Service', path: '/it-support-service' },
    ],
  },
  {
  label: 'Industries',
  path: '/industries',
  dropdown: [
    {
      label: 'Commercial Premises/ Corporate Offices',
      path: '/industry-commercial-corporate-facility'
    },
    {
      label: 'Residential Area',
      path: '/industry-residential-facility'
    },
    {
      label: 'Manufacturing units',
      path: '/industry-manufacturing-facility'
    },
    {
      label: 'Healthcare sector',
      path: '/industry-healthcare-facility'
    },
    {
      label: 'Education sector',
      path: '/industry-education-facility'
    },
  ],
},
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

export default navigation;
