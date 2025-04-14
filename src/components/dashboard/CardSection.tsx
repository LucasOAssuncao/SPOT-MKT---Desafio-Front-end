interface CardSectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  export function CardSection({ title, children }: CardSectionProps) {
    return (
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <div>{children}</div>
      </div>
    );
  }
  