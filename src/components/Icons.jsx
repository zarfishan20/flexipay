const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const ArrowRight = (p) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowUpRight = (p) => (<svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>);
export const ArrowLeft = (p) => (<svg {...base} {...p}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>);
export const Phone = (p) => (<svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>);
export const Mail = (p) => (<svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
export const Pin = (p) => (<svg {...base} {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
export const Clock = (p) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
export const Check = (p) => (<svg {...base} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>);
export const Payroll = (p) => (<svg {...base} {...p}><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.6" /><path d="M6.5 9.5v5M17.5 9.5v5" /></svg>);
export const Ledger = (p) => (<svg {...base} {...p}><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z" /><path d="M5 17a3 3 0 0 1 3-3h11M9 8h6M9 11h4" /></svg>);
export const Award = (p) => (<svg {...base} {...p}><circle cx="12" cy="9" r="5.5" /><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" /></svg>);
export const Quote = (p) => (<svg {...base} viewBox="0 0 48 48" strokeWidth={0} fill="currentColor" {...p}><path d="M8 34c0-9 4-16 13-20l2 3c-5 3-7 6-7.5 10H21v11H8v-4Zm19 0c0-9 4-16 13-20l2 3c-5 3-7 6-7.5 10H40v11H27v-4Z" /></svg>);
