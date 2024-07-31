import { useState, createContext, FC, ReactNode } from 'react';

interface MobileNavigationContextType {
    showNavigationForMobile: boolean;
    setShowNavigationForMobile: (newValue: boolean) => void;
  }
  
  interface MyProviderProps {
    children: ReactNode;
  }
  
  const MobileNavigationContext = createContext<MobileNavigationContextType>({
    showNavigationForMobile: false,
    setShowNavigationForMobile: (newValue: boolean): void => { }
  });
  
  const MobileNavigationProvider: FC<MyProviderProps> = ({ children }) => {
    const [showNavigationForMobile, setShowNavigationForMobile] = useState<boolean>(false);
  
    return (
      <MobileNavigationContext.Provider value={{ showNavigationForMobile, setShowNavigationForMobile }}>
        {children}
      </MobileNavigationContext.Provider>
    );
  };

  export {MobileNavigationContext, MobileNavigationProvider}