import React, { useState } from "react";
import Card from "../ui/Card";
import { Info, AlertTriangle, CheckCircle, Moon } from "lucide-react";


const CardDemo = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <button
        onClick={() => setLoading((prev) => !prev)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Toggle Loading
      </button>

      <Card variant="info" isClickable loading={loading}>
        <Card.Header icon={Info}>Info Card</Card.Header>
        <Card.Body>This is a reusable info card.</Card.Body>
        <Card.Footer>Last updated just now</Card.Footer>
      </Card>

      <Card variant="warning" isClickable loading={loading}>
        <Card.Header icon={AlertTriangle}>Warning</Card.Header>
        <Card.Body>
          Please fix the highlighted issues before submitting.
        </Card.Body>
        <Card.Footer>2 alerts</Card.Footer>
      </Card>

      <Card variant="success" isClickable loading={loading}>
        <Card.Header icon={CheckCircle}>Success</Card.Header>
        <Card.Body>Your data has been saved successfully!</Card.Body>
        <Card.Footer>All good 🎉</Card.Footer>
      </Card>

      <Card variant="dark" loading={loading}>
        <Card.Header icon={Moon}>Dark Mode Card</Card.Header>
        <Card.Body>Clean and modern design for dark UIs.</Card.Body>
        <Card.Footer>Dark mode enabled</Card.Footer>
      </Card>
    </div>
  );
};

export default CardDemo;
