import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Play, Image, Smartphone, Tv, FolderOpen, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileItem {
  id: string;
  title: string;
  description?: string;
  type: 'image' | 'video' | 'apk' | 'link' | 'drive' | 'telegram' | 'app';
  url: string;
  isExternal?: boolean;
  thumbnail?: string;
}

interface FileCardProps {
  file: FileItem;
  className?: string;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'image':
      return Image;
    case 'video':
      return Play;
    case 'apk':
    case 'app':
      return Smartphone;
    case 'drive':
      return FolderOpen;
    case 'telegram':
      return MessageCircle;
    case 'link':
    default:
      return ExternalLink;
  }
};

const getFileTypeColor = (type: string) => {
  switch (type) {
    case 'image':
      return 'text-emerald-400';
    case 'video':
      return 'text-red-400';
    case 'apk':
    case 'app':
      return 'text-blue-400';
    case 'drive':
      return 'text-yellow-400';
    case 'telegram':
      return 'text-cyan-400';
    case 'link':
    default:
      return 'text-primary';
  }
};

export const FileCard = ({ file, className }: FileCardProps) => {
  const Icon = getFileIcon(file.type);
  const iconColor = getFileTypeColor(file.type);

  const handleClick = () => {
    if (file.isExternal) {
      window.open(file.url, '_blank');
    } else {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.title;
      link.click();
    }
  };

  return (
    <Card className={cn(
      "group relative overflow-hidden border-border bg-card backdrop-blur-sm",
      "hover:bg-vault-card-hover hover:shadow-vault-hover",
      "transition-all duration-300 ease-out hover:scale-[1.02]",
      "hover:border-vault-border-glow",
      className
    )}>
      <div className="absolute inset-0 bg-vault-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg bg-secondary/50 group-hover:bg-secondary/70 transition-colors",
              iconColor
            )}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors truncate">
                {file.title}
              </h3>
              {file.description && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {file.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {file.thumbnail && file.type === 'image' && (
          <div className="aspect-video rounded-lg overflow-hidden bg-secondary/20">
            <img 
              src={file.thumbnail} 
              alt={file.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {file.thumbnail && file.type === 'video' && (
          <div className="aspect-video rounded-lg overflow-hidden bg-secondary/20 relative">
            <video 
              src={file.thumbnail}
              className="w-full h-full object-cover"
              muted
              loop
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 rounded-full p-3">
                <Play className="h-6 w-6 text-white fill-white" />
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={handleClick}
          className="w-full bg-vault-gradient hover:opacity-90 text-white border-0 shadow-vault group-hover:shadow-vault-hover transition-all duration-300"
          size="sm"
        >
          {file.isExternal ? (
            <>
              <ExternalLink className="h-4 w-4 mr-2" />
              Open Link
            </>
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              Download
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};