import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, ShoppingCart, TrendingUp, MessageSquare, Zap } from "lucide-react"

const Index = () => {
  const stats = [
    {
      title: "Total Clientes",
      value: "2,845",
      change: "+12.5%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Órdenes del Mes",
      value: "1,234",
      change: "+8.2%",
      icon: ShoppingCart,
      trend: "up"
    },
    {
      title: "Mensajes Enviados",
      value: "15,678",
      change: "+23.1%",
      icon: MessageSquare,
      trend: "up"
    },
    {
      title: "Conversiones",
      value: "89.4%",
      change: "+5.4%",
      icon: TrendingUp,
      trend: "up"
    }
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Resumen general de tu ecommerce
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-gradient-card hover:shadow-hover transition-all duration-300 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-success">
                {stat.change} desde el mes pasado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Acciones Rápidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
              <h3 className="font-medium">Nueva Campaña</h3>
              <p className="text-sm text-muted-foreground">Crear campaña de marketing</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
              <h3 className="font-medium">Agregar Cliente</h3>
              <p className="text-sm text-muted-foreground">Registrar nuevo cliente</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
              <h3 className="font-medium">Ver Integraciones</h3>
              <p className="text-sm text-muted-foreground">Gestionar conexiones</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
