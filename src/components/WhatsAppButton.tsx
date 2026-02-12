const WhatsAppButton = () => {
  const phone = "5541987903434";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da ioMob.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958a15.9 15.9 0 008.832 2.672C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.35 22.606c-.394 1.108-1.946 2.028-3.176 2.296-.842.18-1.942.324-5.646-1.214-4.742-1.966-7.794-6.778-8.032-7.094-.228-.316-1.916-2.55-1.916-4.864 0-2.314 1.214-3.45 1.644-3.924.394-.434 1.038-.612 1.652-.612.2 0 .38.01.54.018.474.02.712.048 1.024.792.394.928 1.352 3.296 1.47 3.536.118.24.236.556.078.872-.148.324-.278.468-.518.742-.24.274-.468.484-.708.778-.22.258-.468.534-.196 1.01.272.468 1.212 2 2.602 3.24 1.784 1.594 3.286 2.088 3.754 2.318.35.172.762.136 1.044-.164.356-.38.796-.1 1.262-1.508.188-.356.42-.296.708-.178.292.118 1.846.87 2.162 1.028.316.158.526.236.604.368.078.132.078.762-.316 1.87z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
