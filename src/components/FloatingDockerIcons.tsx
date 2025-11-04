import { Container, Box, Package, Layers, Server, Boxes } from "lucide-react";

const FloatingDockerIcons = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <Container 
        className="absolute top-20 left-10 w-16 h-16 text-primary/10 animate-float"
        strokeWidth={1.5}
      />
      <Box 
        className="absolute top-40 right-20 w-20 h-20 text-primary/10 animate-float-slow"
        strokeWidth={1.5}
        style={{ animationDelay: "1s" }}
      />
      <Package 
        className="absolute bottom-40 left-20 w-14 h-14 text-primary/10 animate-float"
        strokeWidth={1.5}
        style={{ animationDelay: "0.2s" }}
      />
      <Layers 
        className="absolute bottom-20 right-40 w-16 h-16 text-primary/10 animate-float-slow"
        strokeWidth={1.5}
        style={{ animationDelay: "0.3s" }}
      />
      <Server 
        className="absolute top-1/2 right-10 w-18 h-18 text-primary/10 animate-float"
        strokeWidth={1.5}
        style={{ animationDelay: "0.1s" }}
      />
      <Boxes 
        className="absolute top-1/2 left-1/3 w-12 h-12 text-primary/10 animate-float-slow"
        strokeWidth={1.5}
        style={{ animationDelay: "0.5s" }}
      />
      <Container 
        className="absolute top-1/3 right-1/4 w-16 h-16 text-primary/10 animate-float"
        strokeWidth={1.5}
        style={{ animationDelay: "0.7s" }}
      />
      <Package 
        className="absolute bottom-1/3 left-1/4 w-14 h-14 text-primary/10 animate-float-slow"
        strokeWidth={1.5}
        style={{ animationDelay: "0.9s" }}
      />
    </div>
  );
};

export default FloatingDockerIcons;
