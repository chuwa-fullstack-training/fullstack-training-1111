import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Box = {
  name: string;
  color: string;
};

const BoxPage: React.FC<{
  box: Box;
  onNameChange: (newName: string) => void;
  onColorChange: (newColor: string) => void;
}> = ({ box, onNameChange, onColorChange }) => {
  return (
    <div className="container">
      <Card className="card" style={{ backgroundColor: box.color }}>
        <CardHeader>
          <CardTitle>Component Name:</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="text"
            value={box.name}
            onChange={(e) => onNameChange(e.target.value)}
            className="shadcn-input"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default BoxPage;
