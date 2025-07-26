import { useState } from "react"
import { 
  BarChart3, 
  MessageSquare, 
  Users, 
  Megaphone, 
  Bot, 
  Package, 
  Users2, 
  ShoppingCart,
  Settings,
  Puzzle
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
]

const communicationItems = [
  { title: "Comunicación", url: "/comunicacion", icon: MessageSquare },
  { title: "Contactos", url: "/contactos", icon: Users },
  { title: "Campañas", url: "/campanas", icon: Megaphone },
  { title: "Telegram", url: "/telegram", icon: MessageSquare },
]

const ecommerceItems = [
  { title: "Clientes", url: "/clientes", icon: Users2 },
  { title: "Órdenes", url: "/ordenes", icon: ShoppingCart },
  { title: "Inventario", url: "/inventario", icon: Package },
]

const systemItems = [
  { title: "Automatizaciones", url: "/automatizaciones", icon: Bot },
  { title: "Integraciones", url: "/integraciones", icon: Puzzle },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const allItems = [...mainItems, ...communicationItems, ...ecommerceItems, ...systemItems]
  const isActive = (path: string) => currentPath === path

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-card border-l-2 border-sidebar-primary" 
      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all duration-200"

  const renderMenuItems = (items: typeof mainItems) => (
    <SidebarMenu className="space-y-1">
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <NavLink 
              to={item.url} 
              end 
              className={({ isActive }) => `
                ${getNavCls({ isActive })}
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
                ${collapsed ? 'justify-center' : ''}
              `}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar border-sidebar-border">
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-semibold text-sidebar-foreground">OWL</h2>
                <p className="text-xs text-muted-foreground">Ecommerce Nexus</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 py-2">
          {/* Dashboard */}
          <SidebarGroup className="px-2">
            <SidebarGroupContent>
              {renderMenuItems(mainItems)}
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Communication */}
          <SidebarGroup className="px-2">
            {!collapsed && (
              <SidebarGroupLabel className="px-2 text-xs font-medium text-sidebar-foreground/70 mb-2">
                Comunicación
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              {renderMenuItems(communicationItems)}
            </SidebarGroupContent>
          </SidebarGroup>

          {/* E-commerce */}
          <SidebarGroup className="px-2">
            {!collapsed && (
              <SidebarGroupLabel className="px-2 text-xs font-medium text-sidebar-foreground/70 mb-2">
                E-commerce
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              {renderMenuItems(ecommerceItems)}
            </SidebarGroupContent>
          </SidebarGroup>

          {/* System */}
          <SidebarGroup className="px-2">
            {!collapsed && (
              <SidebarGroupLabel className="px-2 text-xs font-medium text-sidebar-foreground/70 mb-2">
                Sistema
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              {renderMenuItems(systemItems)}
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">A</span>
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  Admin OWL
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  admin@owl.com
                </p>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}