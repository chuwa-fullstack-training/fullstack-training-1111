import React from "react";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavBarProps = {
  boxNames: string[];
  colors: string[];
  selectedBox: number | null;
  onColorChange: (newColor: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({
  boxNames,
  colors,
  selectedBox,
  onColorChange,
}) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Dropdown menu for box selection */}
      <DropdownMenu>
        <DropdownMenuTrigger className="dropdown">
          {selectedBox !== null ? boxNames[selectedBox] : "Select a Box"}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {boxNames.map((name, index) => (
            <DropdownMenuItem key={index} onClick={() => navigate(`/${index}`)}>
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dropdown menu for color selection */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className="dropdown"
          disabled={selectedBox === null}
        >
          Select a color
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {colors.map((name, index) => (
            <DropdownMenuItem key={index} onClick={() => onColorChange(name)}>
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar;
