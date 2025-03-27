

interface HealthRiskCalculatorProps {
  area: string;
  familyMembers: number;
  ages: number[];
  hoursOutside: number;
  healthCondition: string;
}

export default function HealthRiskCalculator({
  area,
  familyMembers,
  ages,
  hoursOutside,
  healthCondition,
}: HealthRiskCalculatorProps) {
  if (!area) {
    return <p className="text-red-600 font-semibold">Please enter a valid area.</p>;
  }

  const calculateHealthRisk = () => {
    if (!ages.length || hoursOutside <= 0) return null;

    // Sample formula (Modify as needed)
    const perPersonCost = hoursOutside * 500 * 12; 
    return perPersonCost * familyMembers;
  };

  const result = calculateHealthRisk();

  return (
    <div className="mt-6 p-4 rounded-lg shadow-lg bg-gray-200">
      <h3 className="text-xl font-bold text-black"> Health Risk Estimated Cost:</h3>
      {result !== null ? (
        <p className="text-lg text-black">
           Estimated Yearly Cost for Family: <strong>₹{result.toLocaleString()}</strong>
        </p>
      ) : (
        <p className="text-red-600 font-semibold">Invalid input data.</p>
      )}
    </div>
  );
}
