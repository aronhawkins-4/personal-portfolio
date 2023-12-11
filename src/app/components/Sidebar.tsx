import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-900 w-64 fixed top-0 left-0 h-full p-2">
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
    </div>
  );
};
