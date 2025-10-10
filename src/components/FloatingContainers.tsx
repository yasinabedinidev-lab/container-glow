import { Container } from "lucide-react";

const FloatingContainers = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <Container 
        className="absolute top-20 left-10 w-16 h-16 text-neon-blue/20 animate-float"
        strokeWidth={1}
      />
      <Container 
        className="absolute top-40 right-20 w-20 h-20 text-neon-cyan/20 animate-float-slow"
        strokeWidth={1}
        style={{ animationDelay: "1s" }}
      />
      <Container 
        className="absolute bottom-32 left-1/4 w-24 h-24 text-pastel-purple/20 animate-float"
        strokeWidth={1}
        style={{ animationDelay: "2s" }}
      />
      <Container 
        className="absolute top-1/3 right-1/4 w-16 h-16 text-pastel-pink/20 animate-float-slow"
        strokeWidth={1}
        style={{ animationDelay: "3s" }}
      />
      <Container 
        className="absolute bottom-20 right-10 w-20 h-20 text-neon-blue/20 animate-float"
        strokeWidth={1}
        style={{ animationDelay: "4s" }}
      />
      <Container 
        className="absolute top-1/2 left-1/3 w-12 h-12 text-pastel-green/20 animate-float-slow"
        strokeWidth={1}
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  );
};

export default FloatingContainers;
