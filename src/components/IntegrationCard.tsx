import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { LucideIcon } from "lucide-react"

interface IntegrationCardProps {
  title: string
  description: string
  icon: LucideIcon
  status: "connected" | "disconnected" | "configuring"
  messagesCount?: number
  onToggle?: () => void
  onConfigure?: () => void
}

export function IntegrationCard({
  title,
  description,
  icon: Icon,
  status,
  messagesCount = 0,
  onToggle,
  onConfigure,
}: IntegrationCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "connected":
        return "success"
      case "configuring":
        return "warning"
      default:
        return "secondary"
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "connected":
        return "Conectado"
      case "configuring":
        return "Configurando"
      default:
        return "Desconectado"
    }
  }

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-muted">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Badge variant={getStatusColor() as any} className="text-xs">
            {getStatusText()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-card-foreground">
              {messagesCount}
            </span>
            <span className="text-xs text-muted-foreground">
              Mensajes Enviados
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {status === "configuring" ? (
              <Button 
                onClick={onConfigure}
                variant="warning"
                size="sm"
                className="text-xs"
              >
                Completar
              </Button>
            ) : status === "disconnected" ? (
              <Button 
                onClick={onConfigure}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Configurar
              </Button>
            ) : (
              <Switch 
                checked={status === "connected"}
                onCheckedChange={onToggle}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}