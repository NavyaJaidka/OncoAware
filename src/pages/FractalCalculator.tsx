
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface CalculationResult {
  equation: string;
  fractal: number;
  slope: number;
  intercept: number;
  cancerDetection: {
    isCancer: boolean;
    message: string;
  };
}

const FractalCalculator = () => {
  const [n1, setN1] = useState('');
  const [s1, setS1] = useState('');
  const [n2, setN2] = useState('');
  const [s2, setS2] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState('');

  // Cancer detection threshold - you can adjust this value based on medical research
  const CANCER_THRESHOLD = 1.5;

  const handleCalculate = () => {
    const num1 = Number(n1);
    const dim1 = Number(s1);
    const num2 = Number(n2);
    const dim2 = Number(s2);

    // Validation
    if (isNaN(num1) || isNaN(dim1) || isNaN(num2) || isNaN(dim2)) {
      setError('Please enter valid numbers.');
      setResult(null);
      return;
    }

    if (num1 <= 0 || dim1 <= 0 || num2 <= 0 || dim2 <= 0) {
      setError('Please enter valid positive numbers.');
      setResult(null);
      return;
    }

    setError('');

    // Logarithmic calculation based on the provided code
    const log10 = (x: number) => Math.log(x) / Math.log(10);
    
    const x1 = log10(num1);
    const x2 = log10(num2);
    const y1 = log10(dim1);
    const y2 = log10(dim2);

    const slope = (y2 - y1) / (x2 - x1);
    const intercept = y1 - slope * x1;

    const equation = `y = ${slope.toFixed(4)}x + ${intercept.toFixed(4)}`;

    // Cancer detection logic
    const isCancer = slope > CANCER_THRESHOLD;
    const cancerDetection = {
      isCancer,
      message: isCancer 
        ? `Cancer detected - Fractal dimension (${slope.toFixed(4)}) is above threshold (${CANCER_THRESHOLD})`
        : `No cancer detected - Fractal dimension (${slope.toFixed(4)}) is below threshold (${CANCER_THRESHOLD})`
    };

    setResult({
      equation,
      fractal: slope,
      slope,
      intercept,
      cancerDetection
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Cancer Detection Calculator</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Calculate fractal dimensions and detect cancer using logarithmic analysis
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md shadow-2xl border-0 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden animate-scale-in hover:shadow-3xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-8">
              <CardTitle className="text-2xl font-bold">
                Cancer Detection Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="n1" className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    Enter Number of Boxes (N1)
                  </Label>
                  <Input
                    id="n1"
                    type="number"
                    value={n1}
                    onChange={(e) => setN1(e.target.value)}
                    placeholder="Enter Number of Boxes (N1)"
                    className="mt-2 h-12 rounded-lg border-gray-200 dark:border-gray-600 text-center text-gray-500 dark:text-gray-300 dark:bg-gray-700 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="s1" className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    Enter Dimension (S1)
                  </Label>
                  <Input
                    id="s1"
                    type="number"
                    value={s1}
                    onChange={(e) => setS1(e.target.value)}
                    placeholder="Enter Dimension (S1)"
                    className="mt-2 h-12 rounded-lg border-gray-200 dark:border-gray-600 text-center text-gray-500 dark:text-gray-300 dark:bg-gray-700 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="n2" className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    Enter Number of Boxes (N2)
                  </Label>
                  <Input
                    id="n2"
                    type="number"
                    value={n2}
                    onChange={(e) => setN2(e.target.value)}
                    placeholder="Enter Number of Boxes (N2)"
                    className="mt-2 h-12 rounded-lg border-gray-200 dark:border-gray-600 text-center text-gray-500 dark:text-gray-300 dark:bg-gray-700 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="s2" className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    Enter Dimension (S2)
                  </Label>
                  <Input
                    id="s2"
                    type="number"
                    value={s2}
                    onChange={(e) => setS2(e.target.value)}
                    placeholder="Enter Dimension (S2)"
                    className="mt-2 h-12 rounded-lg border-gray-200 dark:border-gray-600 text-center text-gray-500 dark:text-gray-300 dark:bg-gray-700 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                disabled={!n1 || !s1 || !n2 || !s2}
              >
                Calculate & Detect Cancer
              </Button>

              {error && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                </div>
              )}

              {result && (
                <div className="mt-6 space-y-4">
                  {/* Cancer Detection Result */}
                  <div className={`p-6 rounded-lg border-2 animate-fade-in ${
                    result.cancerDetection.isCancer 
                      ? 'bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-300 dark:border-red-700'
                      : 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-300 dark:border-green-700'
                  }`}>
                    <div className="flex items-center mb-3">
                      {result.cancerDetection.isCancer ? (
                        <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mr-2" />
                      ) : (
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                      )}
                      <h4 className={`font-bold text-lg ${
                        result.cancerDetection.isCancer 
                          ? 'text-red-800 dark:text-red-300' 
                          : 'text-green-800 dark:text-green-300'
                      }`}>
                        {result.cancerDetection.isCancer ? 'CANCER DETECTED' : 'NO CANCER DETECTED'}
                      </h4>
                    </div>
                    <p className={`text-sm ${
                      result.cancerDetection.isCancer 
                        ? 'text-red-700 dark:text-red-400' 
                        : 'text-green-700 dark:text-green-400'
                    }`}>
                      {result.cancerDetection.message}
                    </p>
                  </div>

                  {/* Mathematical Results */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800 animate-fade-in">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Mathematical Results:</h4>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Equation:</p>
                        <p className="text-blue-700 dark:text-blue-400 font-mono text-lg">{result.equation}</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Fractal Dimension:</p>
                        <p className="text-purple-700 dark:text-purple-400 font-mono text-xl font-bold">{result.fractal.toFixed(4)}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Slope:</p>
                          <p className="text-gray-700 dark:text-gray-300 font-mono">{result.slope.toFixed(4)}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Intercept:</p>
                          <p className="text-gray-700 dark:text-gray-300 font-mono">{result.intercept.toFixed(4)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Information Panel */}
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Note:</strong> This calculator uses fractal dimension analysis for cancer detection. 
                  Higher fractal dimensions (above {CANCER_THRESHOLD}) typically indicate cancerous tissue due to 
                  irregular growth patterns, while lower values suggest healthy tissue structure.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FractalCalculator;
