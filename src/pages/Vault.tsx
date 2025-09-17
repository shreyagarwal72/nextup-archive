import { useState } from "react";
import { FileCard, FileItem } from "@/components/FileCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const vaultFiles: FileItem[] = [
  {
    id: "1",
    title: "All Sound effect",
    description: "Complete collection of sound effects for video editing and content creation",
    type: "drive",
    url: "https://drive.google.com/drive/folders/1u6cDD5SpUC0M3eiDdYgalNvt58vKucgs",
    isExternal: true,
  },
  {
    id: "2",
    title: "Minecraft Subscribe Video",
    description: "Promotional video for Minecraft content",
    type: "video",
    url: "video/2.mp4",
    thumbnail: "video/2.mp4",
    isExternal: false,
  },
  {
    id: "3",
    title: "My Editing App",
    description: "Custom video editing application",
    type: "apk",
    url: "https://www.mediafire.com/file/bydg1es9bew4649/base.apk/file",
    isExternal: true,
  },
  {
    id: "4",
    title: "🎥 Top Video Editing",
    description: "Professional video editing tool - Shotcut APK",
    type: "apk",
    url: "https://www.mediafire.com/file/6jj0ku6dz6sq8xy/Shotcut.apk/file",
    isExternal: true,
  },
  {
    id: "5",
    title: "My Editing Assets",
    description: "Collection of video editing resources and templates",
    type: "drive",
    url: "https://drive.google.com/drive/folders/1C3-5UJ6aeTXC9LnXdvXwMM8iT87e9zfZ",
    isExternal: true,
  },
  {
    id: "6",
    title: "Fav Telegram Channel",
    description: "Tech Insider Ashish - Latest tech updates and tips",
    type: "telegram",
    url: "https://t.me/techinsiderashish1",
    isExternal: true,
  },
  {
    id: "7",
    title: "Unlimited Entertainment Anime App",
    description: "MovieBox Premium - Stream unlimited anime and movies",
    type: "app",
    url: "https://cloud.9mod.com/MovieBox/MovieBox%20v3.0.05.0711.03%20%28Premium%29.apk",
    isExternal: true,
  },
  {
    id: "8",
    title: "🎬✨ Unlimited Anime App",
    description: "Base anime streaming application",
    type: "apk",
    url: "video/base.apk",
    isExternal: false,
  },
  {
    id: "9",
    title: "📺 Unlimited Live TV for Android TV & Phone",
    description: "Live TV streaming app for Android devices",
    type: "app",
    url: "https://www.mediafire.com/file/0s4rqywxv9zvgyt/base.apk/file",
    isExternal: true,
  },
  {
    id: "10",
    title: "🎓 All Premium Courses",
    description: "Complete collection of premium educational courses and tutorials",
    type: "drive",
    url: "https://drive.google.com/drive/folders/1RpqtuQzlgO3HVfl5-cQpjOBbuxtXw-8a",
    isExternal: true,
  },
];

const Vault = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredFiles = vaultFiles.filter((file) => {
    const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || file.type === selectedType;
    return matchesSearch && matchesType;
  });

  const fileTypes = [
    { value: "all", label: "All Files", count: vaultFiles.length },
    { value: "image", label: "Images", count: vaultFiles.filter(f => f.type === "image").length },
    { value: "video", label: "Videos", count: vaultFiles.filter(f => f.type === "video").length },
    { value: "apk", label: "APKs", count: vaultFiles.filter(f => f.type === "apk").length },
    { value: "app", label: "Apps", count: vaultFiles.filter(f => f.type === "app").length },
    { value: "drive", label: "Drive", count: vaultFiles.filter(f => f.type === "drive").length },
    { value: "telegram", label: "Telegram", count: vaultFiles.filter(f => f.type === "telegram").length },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <div className="relative bg-vault-backdrop border-b border-vault-border-glow/10">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-vault-gradient rounded-lg flex items-center justify-center shadow-vault-3d">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-vault-gradient bg-clip-text text-transparent">
              💎 Nextup Studio Vault
            </h1>
          </div>
          <p className="text-sm text-muted-foreground/70">{vaultFiles.length} Premium Resources Available</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground/60" />
            <Input
              placeholder="Search vault contents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 bg-vault-glass-3d backdrop-blur-vault border-vault-border-glow/20 focus:border-vault-border-glow focus:shadow-vault-3d transition-all duration-300 text-base"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-6 h-6 bg-vault-gradient rounded opacity-20" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {fileTypes.map((type, index) => (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedType(type.value)}
                className={cn(
                  "transition-all duration-300 hover:scale-105 backdrop-blur-sm",
                  "animate-fade-in [animation-delay:var(--animation-delay)]",
                  selectedType === type.value 
                    ? "bg-vault-gradient hover:opacity-90 shadow-vault-3d border-0" 
                    : "bg-vault-glass-3d border-vault-border-glow/20 hover:border-vault-border-glow hover:bg-vault-card-hover"
                )}
                style={{ '--animation-delay': `${600 + index * 50}ms` } as React.CSSProperties}
              >
                {type.label}
                <span className={cn(
                  "ml-2 text-xs px-2 py-1 rounded-full transition-all",
                  selectedType === type.value 
                    ? "bg-white/20 text-white" 
                    : "bg-primary/10 text-primary"
                )}>
                  {type.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20" style={{ perspective: "1200px" }}>
          {filteredFiles.map((file, index) => (
            <FileCard
              key={file.id}
              file={file}
              className={cn(
                "animate-vault-card-3d [animation-delay:var(--animation-delay)]",
                "hover:animate-vault-3d-float",
                "transform-gpu"
              )}
              style={{ 
                '--animation-delay': `${index * 100}ms`,
                transformStyle: "preserve-3d"
              } as React.CSSProperties}
            />
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <div className="text-center py-24">
            <div className="relative inline-block">
              <div className="text-8xl mb-6 animate-bounce">🔍</div>
              <div className="absolute inset-0 bg-vault-gradient rounded-full blur-2xl opacity-20" />
            </div>
            <h3 className="text-2xl font-bold text-muted-foreground mb-4">No files found</h3>
            <p className="text-muted-foreground/80 text-lg max-w-md mx-auto leading-relaxed">
              Try adjusting your search terms or filter criteria to discover more premium resources
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
              }}
              variant="outline"
              className="mt-6 bg-vault-glass-3d border-vault-border-glow/30 hover:bg-vault-card-hover hover:border-vault-border-glow shadow-vault-3d hover:shadow-vault-3d-hover transform-gpu hover:scale-105"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-vault-border-glow/20 bg-vault-backdrop backdrop-blur-vault">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-vault-gradient rounded-lg flex items-center justify-center shadow-vault-3d animate-vault-pulse-glow">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-vault-gradient bg-clip-text text-transparent">
                Nextup Studio
              </span>
            </div>
            <div className="text-sm text-muted-foreground/80">
              © 2025 <span className="font-semibold text-primary">Nextup Studio</span>. All rights reserved.
              <br />
              <span className="text-xs mt-2 block">Securing your digital assets with premium vault technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Vault;