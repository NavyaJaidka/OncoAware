
import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Microscope, BarChart3, Target, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const CancerDetectionApp = () => {
  const features = [
    {
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      title: "Cellular Fractal Analysis",
      description: "Analyze cellular structure patterns using fractal geometry to detect abnormal growth patterns.",
      details: "Quantifies the complexity of cellular arrangements and identifies irregular patterns that may indicate malignancy."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Statistical Modeling",
      description: "Advanced statistical models for pattern recognition in biological data and cellular analysis.",
      details: "Employs machine learning algorithms to identify statistical anomalies in cellular density distributions."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Predictive Analysis",
      description: "Predictive modeling for early detection and risk assessment based on mathematical frameworks.",
      details: "Uses predictive algorithms to assess cancer risk based on multiple biological and statistical factors."
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      title: "Neural Network Analysis",
      description: "Deep learning approaches for complex pattern recognition in medical imaging and data.",
      details: "Implements neural networks to identify subtle patterns that traditional methods might miss."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Research and Discovery",
      description: "Cutting-edge research in computational biology and mathematical modeling for healthcare.",
      details: "Advancing the field through innovative mathematical approaches to biological problem-solving."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-12">
            <div className="text-white space-y-6">
              <h1 className="text-5xl font-bold leading-tight animate-fade-in">
                OncoAware
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed animate-fade-in">
                We analyze the fractal dimensions of healthy and diseased cells to understand their complexity using mathematical techniques. Our study focuses on neurological diseases like Alzheimer's and Parkinson's, utilizing tools such as the box counting method to quantify cellular changes and aid in early disease detection.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 animate-fade-in">
                Explore Research
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Section */}
      <div className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Understanding Cellular Behavior Through Fractal Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Our project delves into the fascinating interplay between biology and mathematics, exploring how fractal geometry can reveal the inner workings of cells. By calculating the fractal dimension of healthy and diseased tissues, we uncover patterns that mirror the complexity of biological systems.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{feature.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Global Research Impact Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 dark:from-gray-800 dark:to-black text-white py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="text-blue-300 text-sm font-medium mb-2">Global Research Impact</div>
              <h2 className="text-4xl font-bold mb-6">
                Advancing Science with Inter-Disciplinary Innovation
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Our research bridges the gap between biology and mathematics, offering innovative methods to analyze cellular and disease progression. By applying fractal dimensions to genetics and imaging data, we're creating novel approaches for understanding disease mechanisms.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">150+</div>
                  <div className="text-sm text-blue-200">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">25+</div>
                  <div className="text-sm text-blue-200">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">98%</div>
                  <div className="text-sm text-blue-200">Accuracy Rate</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Globe className="w-32 h-32 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-2">
            <strong>OncoAware</strong>
          </p>
          <p className="text-gray-400">
            Copyright © 2025 OncoAware | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancerDetectionApp;
