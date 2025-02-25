import { Calendar, Car, Heart, NotepadText, SquareChartGantt } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Loved-Cars",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareChartGantt,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/dashboard/admin/reserves-admin",
  },
]
