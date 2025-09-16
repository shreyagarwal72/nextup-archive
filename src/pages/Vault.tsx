import { useState } from "react";
import { FileCard, FileItem } from "@/components/FileCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const vaultFiles: FileItem[] = [
  {
    id: "1",
    title: "Minecraft Skin",
    description: "Custom Minecraft player skin for your character",
    type: "image",
    url: "video/1.png",
    thumbnail: "video/1.png",
    isExternal: false,
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
      {/* Header Section */}
      <div className="relative overflow-hidden bg-vault-backdrop border-b border-vault-border-glow/20">
        {/* Navigation Bar */}
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-vault-gradient rounded-xl flex items-center justify-center shadow-vault-3d animate-vault-pulse-glow">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-vault-gradient rounded-xl blur-md opacity-50 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-vault-gradient bg-clip-text text-transparent">
                Nextup Studio
              </h1>
              <p className="text-sm text-muted-foreground/80">Digital Vault</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground/90">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                {vaultFiles.length} Resources
              </span>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium">Premium Access</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-vault-glass-3d border border-vault-border-glow/30 shadow-vault-3d">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Online</span>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-vault-glass-3d backdrop-blur-vault border border-vault-border-glow/30 mb-10 shadow-vault-3d animate-vault-3d-float">
            <Shield className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-base font-bold text-primary tracking-wide">SECURE DIGITAL VAULT</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black bg-vault-gradient bg-clip-text text-transparent mb-8 animate-fade-in tracking-tight">
            💎 Premium Vault
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground/90 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
            Your exclusive digital sanctuary for <span className="text-primary font-semibold">premium apps</span>, 
            <span className="text-primary font-semibold"> educational courses</span>, and 
            <span className="text-primary font-semibold"> entertainment resources</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg text-muted-foreground/80 animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <span className="font-semibold">{vaultFiles.length} Premium Resources</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-medium">Updated Daily</span>
            <div className="hidden sm:block w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-medium">Enterprise Security</span>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-12 w-3 h-3 bg-vault-particle rounded-full animate-vault-particle-float" />
          <div className="absolute top-32 right-20 w-2 h-2 bg-vault-particle rounded-full animate-vault-particle-float [animation-delay:2s]" />
          <div className="absolute bottom-24 left-32 w-4 h-4 bg-vault-particle rounded-full animate-vault-particle-float [animation-delay:4s]" />
          <div className="absolute bottom-32 right-16 w-2 h-2 bg-vault-particle rounded-full animate-vault-particle-float [animation-delay:1s]" />
          
          <div className="absolute top-20 left-10 w-40 h-40 bg-vault-gradient rounded-full blur-3xl opacity-20 animate-vault-3d-float" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-vault-gradient rounded-full blur-3xl opacity-15 animate-vault-3d-float [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vault-gradient rounded-full blur-[150px] opacity-12 animate-vault-pulse-glow" />
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
              className="pl-12 pr-4 py-3 bg-vault-glass backdrop-blur-vault border-border/50 focus:border-vault-border-glow focus:shadow-vault-glow transition-all duration-300 text-base"
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
                    ? "bg-vault-gradient hover:opacity-90 shadow-vault-glow border-0" 
                    : "bg-vault-glass border-border/50 hover:border-vault-border-glow hover:bg-vault-card-hover"
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