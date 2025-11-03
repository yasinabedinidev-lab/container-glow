import dockerShipIcon from "@/assets/docker-ship-icon.png";

const FloatingDockerIcons = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <img 
        src={dockerShipIcon}
        alt="Docker"
        className="absolute top-20 left-10 w-16 h-16 opacity-10 animate-float"
        style={{ filter: "hue-rotate(200deg)" }}
      />
      <img 
        src={dockerShipIcon}
        alt="Docker"
        className="absolute top-40 right-20 w-20 h-20 opacity-10 animate-float-slow"
        style={{ filter: "hue-rotate(120deg)" }}
      />
      <img 
        src={dockerShipIcon}
        alt="Docker"
        className="absolute bottom-40 left-20 w-14 h-14 opacity-10 animate-float"
        style={{ animationDelay: "0.2s", filter: "hue-rotate(280deg)" }}
      />
      <img 
        src={dockerShipIcon}
        alt="Docker"
        className="absolute bottom-20 right-40 w-16 h-16 opacity-10 animate-float-slow"
        style={{ animationDelay: "0.3s", filter: "hue-rotate(60deg)" }}
      />
      <img 
        src={dockerShipIcon}
        alt="Docker"
        className="absolute top-1/2 right-10 w-18 h-18 opacity-10 animate-float"
        style={{ animationDelay: "0.1s", filter: "hue-rotate(180deg)" }}
      />
      <img 
        src={dockerShipIcon}
        alt="Docker"
        className="absolute top-1/2 left-1/3 w-12 h-12 opacity-10 animate-float-slow"
        style={{ animationDelay: "0.5s", filter: "hue-rotate(320deg)" }}
      />
    </div>
  );
};

export default FloatingDockerIcons;
