import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IntegrationCard } from "@/components/IntegrationCard"
import { Plus, MessageSquare, Mail, Phone, Bot, Instagram, TrendingUp } from "lucide-react"

const integrations = [
  {
    id: "whatsapp",
    title: "WhatsApp Business",
    description: "Conecta con tus clientes a través de WhatsApp Business API",
    icon: MessageSquare,
    status: "connected" as const,
    messagesCount: 0,
    category: "communication"
  },
  {
    id: "twilio",
    title: "Twilio SMS",
    description: "Envío masivo de SMS a través de la red global de Twilio",
    icon: Phone,
    status: "connected" as const,
    messagesCount: 0,
    category: "communication"
  },
  {
    id: "email",
    title: "Email Marketing",
    description: "Campañas de email marketing personalizadas",
    icon: Mail,
    status: "configuring" as const,
    messagesCount: 0,
    category: "communication"
  },
  {
    id: "telegram",
    title: "Telegram Bot",
    description: "Bot automatizado para canales y grupos de Telegram",
    icon: Bot,
    status: "connected" as const,
    messagesCount: 0,
    category: "communication"
  },
  {
    id: "tiktok",
    title: "TikTok Business",
    description: "Conecta con tu audiencia a través de TikTok Business API",
    icon: TrendingUp,
    status: "disconnected" as const,
    messagesCount: 0,
    category: "ecommerce"
  },
  {
    id: "instagram",
    title: "Instagram Business",
    description: "Gestiona tu presencia en Instagram Business",
    icon: Instagram,
    status: "disconnected" as const,
    messagesCount: 0,
    category: "ecommerce"
  }
]

export default function Integraciones() {
  const communicationIntegrations = integrations.filter(i => i.category === "communication")
  const ecommerceIntegrations = integrations.filter(i => i.category === "ecommerce")
  const debugIntegrations = integrations.filter(i => i.category === "debug")

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Integraciones
          </h1>
          <p className="text-muted-foreground mt-2">
            Conecta tu tienda con las mejores plataformas y servicios
          </p>
        </div>
        <Button className="shadow-elegant">
          <Plus className="mr-2 h-4 w-4" />
          Nueva Integración
        </Button>
      </div>

      {/* Debug Banner */}
      <Card className="bg-warning/10 border-warning/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-warning-foreground">
            <Bot className="h-4 w-4" />
            <span className="text-sm font-medium">
              Debug: Tab activo: communication, Servicios cargados: 8
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="communication" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="ecommerce" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            E-commerce
          </TabsTrigger>
          <TabsTrigger value="communication" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Comunicación
          </TabsTrigger>
          <TabsTrigger value="debug" className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            Debug
          </TabsTrigger>
        </TabsList>

        <TabsContent value="communication" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communicationIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.id}
                title={integration.title}
                description={integration.description}
                icon={integration.icon}
                status={integration.status}
                messagesCount={integration.messagesCount}
                onToggle={() => console.log(`Toggle ${integration.title}`)}
                onConfigure={() => console.log(`Configure ${integration.title}`)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ecommerce" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ecommerceIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.id}
                title={integration.title}
                description={integration.description}
                icon={integration.icon}
                status={integration.status}
                messagesCount={integration.messagesCount}
                onToggle={() => console.log(`Toggle ${integration.title}`)}
                onConfigure={() => console.log(`Configure ${integration.title}`)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="debug" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Debug Information</CardTitle>
              <CardDescription>
                Información de depuración del sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>Total integraciones:</strong> {integrations.length}</p>
                <p><strong>Conectadas:</strong> {integrations.filter(i => i.status === "connected").length}</p>
                <p><strong>En configuración:</strong> {integrations.filter(i => i.status === "configuring").length}</p>
                <p><strong>Desconectadas:</strong> {integrations.filter(i => i.status === "disconnected").length}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}