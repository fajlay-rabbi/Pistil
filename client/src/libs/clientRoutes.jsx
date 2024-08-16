import {
  CalendarOutlined,
  CodeSandboxOutlined,
  DashboardOutlined,
  EditOutlined,
  ExperimentOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  PhoneOutlined,
  ProfileOutlined,
  StarOutlined,
  StopOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export const clientRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardOutlined,
    profileType: "client",
  },
  {
    path: "find-doctor",
    name: "Find a Doctor",
    icon: HeartOutlined,
    profileType: "client",
  },
  {
    path: "profile",
    name: "My Profile",
    icon: EditOutlined,
    profileType: "client",
  },
  {
    path: "intake-form",
    name: "Intake Form",
    icon: FileTextOutlined,
    profileType: "client",
  },
  {
    path: "medical-history",
    name: "Medical History",
    icon: MedicineBoxOutlined,
    profileType: "client",
  },
  {
    path: "medical-plan",
    name: "Medical Plan",
    icon: ExperimentOutlined,
    profileType: "client",
  },
  {
    isDivider: true,
  },
  {
    path: "buy-package",
    name: "Buy Package",
    icon: CodeSandboxOutlined,
    profileType: "client",
  },
  {
    path: "session-receipt",
    name: "Session Receipts",
    icon: ProfileOutlined,
    profileType: "client",
  },
  {
    path: "payment-receipt",
    name: "Payment Receipts",
    icon: FileDoneOutlined,
    profileType: "client",
  },
  {
    path: "request-support",
    name: "Request for Support",
    icon: PhoneOutlined,
    profileType: "client",
  },
  {
    isDivider: true,
  },
  {
    path: "preparing-session",
    name: "Preparing for Your Session",
    icon: StarOutlined,
    profileType: "client",
  },
];

export const doctorRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardOutlined,
    profileType: "doctor",
  },
  {
    path: "doctor-profile",
    name: "My Profile",
    icon: UserOutlined,
    profileType: "doctor",
  },
  {
    path: "client",
    name: "Client",
    icon: UsergroupAddOutlined,
    profileType: "doctor",
  },
  {
    path: "payment-notes",
    name: "Payment Notes",
    icon: FileTextOutlined,
    profileType: "doctor",
  },
  {
    isDivider: true,
  },
  {
    path: "calendar",
    name: "Calendar",
    icon: CalendarOutlined,
    profileType: "doctor",
  },
  {
    path: "request-support",
    name: "Request for Support",
    icon: PhoneOutlined,
    profileType: "doctor",
  },
  {
    isDivider: true,
  },
  {
    path: "onboarding-video",
    name: "Onboarding Video",
    icon: VideoCameraOutlined,
    profileType: "doctor",
  },
  {
    path: "doctor-guide",
    name: "Doctor Guide",
    icon: FileTextOutlined,
    profileType: "doctor",
  },
  {
    path: "sop",
    name: "Sop for High-Risk Clients",
    icon: StopOutlined,
    profileType: "doctor",
  },
];
