
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Users, Shield, Award, BookOpen, Zap, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';

const About = () => {



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">About Our Platform</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering healthcare through advanced mathematical modeling and accessible screening tools
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To democratize early cancer detection by providing accessible, scientifically-backed screening tools 
                that can assist healthcare professionals and individuals in making informed decisions about their health.
                We believe that cutting-edge mathematical modeling should be available to everyone, regardless of their 
                geographical location or economic status.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Our Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our platform uses advanced mathematical models including sigmoid functions, fractal analysis, and 
                machine learning algorithms to analyze biological data. We combine decades of research in computational 
                biology with modern web technologies to provide real-time, accurate predictions for medical screening.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Research Focus */}
        <Card className="mb-12 shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Research Focus Areas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Neurological Diseases</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Alzheimer's, Parkinson's, and other neurodegenerative conditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Cancer Detection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Early-stage cancer identification through cellular analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Fractal Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Mathematical modeling of cellular complexity and patterns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Accessible</h3>
            <p className="text-gray-600 dark:text-gray-300">Easy-to-use interface designed for both medical professionals and patients</p>
          </div>

          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Scientific</h3>
            <p className="text-gray-600 dark:text-gray-300">Based on proven mathematical models and peer-reviewed medical research</p>
          </div>

          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Secure</h3>
            <p className="text-gray-600 dark:text-gray-300">Privacy-focused design with secure data handling practices</p>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="shadow-lg border-0 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 animate-fade-in">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400 mb-3">Important Medical Disclaimer</h3>
            <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">
              This platform is designed for educational and screening purposes only. All results should be reviewed 
              with qualified healthcare professionals. This tool does not replace professional medical diagnosis, 
              treatment, or advice. Always consult with your doctor for proper medical care and interpretation of results.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
