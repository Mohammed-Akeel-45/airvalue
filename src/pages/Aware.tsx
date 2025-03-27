import { useState } from 'react';
import { 
  Wind, 
  TreePine, 
  Factory, 
  CarFront, 
  Leaf, 
  ShieldAlert, 
  MapPin 
} from 'lucide-react';

// Define interface for regional recommendations
interface RegionalRecommendation {
  region: string;
  specificChallenges: string[];
  uniqueSolutions: string[];
}

// Define interface for AQI level recommendations
interface AQIRecommendation {
  level: string;
  color: string;
  range: [number, number];
  healthImpact: string;
  generalAdvice: string[];
  protectionMeasures: string[];
}

const REGIONS: RegionalRecommendation[] = [
  {
    region: "Delhi",
    specificChallenges: [
      "Crop burning in neighboring states",
      "High vehicular emissions",
      "Industrial pollution"
    ],
    uniqueSolutions: [
      "Support crop residue management programs",
      "Use public transport or carpooling",
      "Advocate for stricter industrial emission controls"
    ]
  },
  {
    region: "Mumbai",
    specificChallenges: [
      "Coastal industrial zones",
      "High population density",
      "Construction dust"
    ],
    uniqueSolutions: [
      "Support green construction practices",
      "Promote vertical gardens in urban spaces",
      "Advocate for industrial emission monitoring"
    ]
  },
  {
    region: "Bangalore",
    specificChallenges: [
      "Rapid urbanization",
      "Vehicle congestion",
      "Electronic waste"
    ],
    uniqueSolutions: [
      "Promote electric vehicle adoption",
      "Support e-waste recycling initiatives",
      "Develop more green corridors"
    ]
  }
];

const AQI_RECOMMENDATIONS: AQIRecommendation[] = [
  {
    level: "Good",
    color: "bg-green-500",
    range: [0, 50],
    healthImpact: "Air quality is satisfactory, minimal health risks.",
    generalAdvice: [
      "Enjoy outdoor activities",
      "Maintain regular exercise routines"
    ],
    protectionMeasures: [
      "Continue normal outdoor activities",
      "Stay hydrated"
    ]
  },
  {
    level: "Moderate",
    color: "bg-yellow-500",
    range: [51, 100],
    healthImpact: "Some pollutants may affect very sensitive individuals.",
    generalAdvice: [
      "Reduce prolonged outdoor exertion",
      "Consider wearing masks in congested areas"
    ],
    protectionMeasures: [
      "Use air purifiers indoors",
      "Keep windows closed during peak pollution hours"
    ]
  },
  {
    level: "Unhealthy for Sensitive Groups",
    color: "bg-orange-500",
    range: [101, 150],
    healthImpact: "Higher risk for elderly, children, and those with respiratory conditions.",
    generalAdvice: [
      "Minimize outdoor activities",
      "Use high-efficiency masks when outside"
    ],
    protectionMeasures: [
      "Use HEPA air purifiers",
      "Create clean air rooms at home",
      "Consult healthcare providers"
    ]
  },
  {
    level: "Unhealthy",
    color: "bg-red-500",
    range: [151, 200],
    healthImpact: "Everyone may experience health effects. Increased risk of respiratory issues.",
    generalAdvice: [
      "Avoid outdoor activities",
      "Stay indoors with filtered air"
    ],
    protectionMeasures: [
      "Use N95 or equivalent masks",
      "Create sealed clean air zones",
      "Use air purifiers with activated carbon filters"
    ]
  },
  {
    level: "Very Unhealthy",
    color: "bg-purple-500",
    range: [201, 300],
    healthImpact: "Serious health warnings. Entire population at high risk.",
    generalAdvice: [
      "Completely avoid outdoor exposure",
      "Use medical-grade respirators"
    ],
    protectionMeasures: [
      "Stay in air-conditioned environments",
      "Use highest grade air purification",
      "Seek medical advice if experiencing symptoms"
    ]
  },
  {
    level: "Hazardous",
    color: "bg-red-900",
    range: [301, 500],
    healthImpact: "Emergency health alert. Entire population severely affected.",
    generalAdvice: [
      "Absolute minimum outdoor exposure",
      "Use highest level of respiratory protection"
    ],
    protectionMeasures: [
      "Immediate medical consultation",
      "Evacuate if possible",
      "Use professional-grade respiratory equipment"
    ]
  }
];

export default function AQIAwareness() {
  const [selectedRegion, setSelectedRegion] = useState("Delhi");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6">
          <h1 className="text-4xl font-extrabold text-center">
            AQI Awareness & Reduction Guide
          </h1>
          <p className="text-center mt-2 text-white/80">
            Empowering communities to breathe cleaner, healthier air
          </p>
        </div>

        <div className="p-6">
          {/* Regional Selector */}
          <div className="mb-8">
            <label className="block text-xl font-semibold mb-4 flex items-center justify-center">
              <MapPin className="mr-2 text-blue-600" />
              Select Your Region
            </label>
            <div className="flex justify-center space-x-4">
              {REGIONS.map((region) => (
                <button
                  key={region.region}
                  onClick={() => setSelectedRegion(region.region)}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300
                    ${selectedRegion === region.region 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}
                  `}
                >
                  {region.region}
                </button>
              ))}
            </div>
          </div>

          {/* Regional Specific Challenges */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                Regional Challenges
              </h2>
              <ul className="space-y-3">
                {REGIONS.find(r => r.region === selectedRegion)?.specificChallenges.map((challenge, index) => (
                  <li 
                    key={index} 
                    className="flex items-center bg-gray-100 p-3 rounded-lg"
                  >
                    <ShieldAlert className="mr-3 text-red-500" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-800">
                Targeted Solutions
              </h2>
              <ul className="space-y-3">
                {REGIONS.find(r => r.region === selectedRegion)?.uniqueSolutions.map((solution, index) => (
                  <li 
                    key={index} 
                    className="flex items-center bg-green-100 p-3 rounded-lg"
                  >
                    <Leaf className="mr-3 text-green-600" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AQI Level Recommendations */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-purple-800">
              AQI Level Guidance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {AQI_RECOMMENDATIONS.map((level) => (
                <div 
                  key={level.level} 
                  className="bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className={`${level.color} h-2`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {level.level}
                    </h3>
                    <p className="text-gray-700 mb-4">{level.healthImpact}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-blue-800">General Advice:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {level.generalAdvice.map((advice, index) => (
                          <li key={index}>{advice}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-800">Protection Measures:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {level.protectionMeasures.map((measure, index) => (
                          <li key={index}>{measure}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Reduction Tips */}
        <div className="bg-blue-50 p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Global AQI Reduction Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CarFront,
                title: "Transportation",
                tips: [
                  "Use public transport",
                  "Carpool or bike",
                  "Consider electric vehicles"
                ]
              },
              {
                icon: Factory,
                title: "Industrial",
                tips: [
                  "Support green technologies",
                  "Advocate for emission controls",
                  "Promote renewable energy"
                ]
              },
              {
                icon: TreePine,
                title: "Personal Action",
                tips: [
                  "Plant trees",
                  "Reduce waste",
                  "Support environmental initiatives"
                ]
              }
            ].map((section) => (
              <div 
                key={section.title} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <section.icon className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="flex items-center">
                      <Wind className="mr-2 text-green-500 w-4 h-4" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}