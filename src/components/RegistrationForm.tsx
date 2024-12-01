import React, { useState } from 'react';
import { FormField } from './FormField';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthName: '',
    birthDate: '',
    birthTime: '',
    place: '',
    raashi: '',
    nakshatra: '',
    caste: '',
    subcaste: '',
    peeta: '',
    homegod: '',
    height: '',
    education: '',
    occupation: '',
    maritalStatus: '',
    annualIncome: '',
    otherDetails: '',
    partnerPreference: '',
    gender: '',
    father: '',
    fathersOccupation: '',
    mother: '',
    mothersOccupation: '',
    sisters: '',
    brothers: '',
    contact: '',
    email: '',
    address: '',
    image1: '',
    image2: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwOsNdp_w2JxTKSvCvMRtXg5habw0Y_LmbY_VZvhu5knD5DNIW2L_JgQlXYCkzrj3Yf/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            ...formData,
            timestamp: new Date().toISOString(),
            sheetName: 'Sheet1' // Specify the sheet name
          }
        })
      });

      toast.success('ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ!', {
        duration: 5000,
      });
      
      setFormData({
        name: '',
        birthName: '',
        birthDate: '',
        birthTime: '',
        place: '',
        raashi: '',
        nakshatra: '',
        caste: '',
        subcaste: '',
        peeta: '',
        homegod: '',
        height: '',
        education: '',
        occupation: '',
        maritalStatus: '',
        annualIncome: '',
        otherDetails: '',
        partnerPreference: '',
        gender: '',
        father: '',
        fathersOccupation: '',
        mother: '',
        mothersOccupation: '',
        sisters: '',
        brothers: '',
        contact: '',
        email: '',
        address: '',
        image1: '',
        image2: ''
      });
    } catch (error) {
      toast.error('ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.', {
        duration: 5000,
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Rest of the component remains exactly the same
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 border-2 border-orange-100">
      <Toaster position="top-center" />
      
      {/* Personal Information */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ (Personal Information)</h2>
        
        <FormField
          label="ಹೆಸರು"
          englishLabel="Name"
          value={formData.name}
          onChange={(value) => updateField('name', value)}
          required
        />

        <FormField
          label="ಲಿಂಗ"
          englishLabel="Gender"
          type="select"
          options={[
            { value: 'male', label: 'ಪುರುಷ (Male)' },
            { value: 'female', label: 'ಮಹಿಳೆ (Female)' }
          ]}
          value={formData.gender}
          onChange={(value) => updateField('gender', value)}
          required
        />

        <FormField
          label="ಜನ್ಮ ನಾಮ"
          englishLabel="Birth Name"
          value={formData.birthName}
          onChange={(value) => updateField('birthName', value)}
        />

        <FormField
          label="ಜನ್ಮ ದಿನಾಂಕ"
          englishLabel="Birth Date"
          type="date"
          value={formData.birthDate}
          onChange={(value) => updateField('birthDate', value)}
          required
        />

        <FormField
          label="ಜನ್ಮ ಸಮಯ"
          englishLabel="Birth Time"
          type="time"
          value={formData.birthTime}
          onChange={(value) => updateField('birthTime', value)}
        />

        <FormField
          label="ಜನ್ಮ ಸ್ಥಳ"
          englishLabel="Birth Place"
          value={formData.place}
          onChange={(value) => updateField('place', value)}
          required
        />
      </div>

      {/* Horoscope Details */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">ಜಾತಕ ವಿವರಗಳು (Horoscope Details)</h2>
        
        <FormField
          label="ರಾಶಿ"
          englishLabel="Raashi"
          value={formData.raashi}
          onChange={(value) => updateField('raashi', value)}
          required
        />

        <FormField
          label="ನಕ್ಷತ್ರ"
          englishLabel="Nakshatra"
          value={formData.nakshatra}
          onChange={(value) => updateField('nakshatra', value)}
          required
        />
      </div>

      {/* Community Details */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">ಸಮುದಾಯದ ವಿವರಗಳು (Community Details)</h2>
        
        <FormField
          label="ಜಾತಿ"
          englishLabel="Caste"
          value={formData.caste}
          onChange={(value) => updateField('caste', value)}
          required
        />

        <FormField
          label="ಉಪಜಾತಿ"
          englishLabel="Sub-caste"
          value={formData.subcaste}
          onChange={(value) => updateField('subcaste', value)}
        />

        <FormField
          label="ಪೀಠ"
          englishLabel="Peeta"
          value={formData.peeta}
          onChange={(value) => updateField('peeta', value)}
        />

        <FormField
          label="ಮನೆದೇವರು"
          englishLabel="Home God"
          value={formData.homegod}
          onChange={(value) => updateField('homegod', value)}
        />
      </div>

      {/* Personal Details */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">ವೈಯಕ್ತಿಕ ವಿವರಗಳು (Personal Details)</h2>
        
        <FormField
          label="ಎತ್ತರ"
          englishLabel="Height"
          value={formData.height}
          onChange={(value) => updateField('height', value)}
          required
        />

        <FormField
          label="ವಿದ್ಯಾಭ್ಯಾಸ"
          englishLabel="Education"
          value={formData.education}
          onChange={(value) => updateField('education', value)}
          required
        />

        <FormField
          label="ಉದ್ಯೋಗ"
          englishLabel="Occupation"
          value={formData.occupation}
          onChange={(value) => updateField('occupation', value)}
          required
        />

        <FormField
          label="ವೈವಾಹಿಕ ಸ್ಥಿತಿ"
          englishLabel="Marital Status"
          type="select"
          options={[
            { value: 'never_married', label: 'ಅವಿವಾಹಿತ (Never Married)' },
            { value: 'divorced', label: 'ವಿಚ್ಛೇದಿತ (Divorced)' },
            { value: 'widowed', label: 'ವಿಧವೆ/ವಿಧುರ (Widowed)' }
          ]}
          value={formData.maritalStatus}
          onChange={(value) => updateField('maritalStatus', value)}
          required
        />

        <FormField
          label="ವಾರ್ಷಿಕ ಆದಾಯ"
          englishLabel="Annual Income"
          value={formData.annualIncome}
          onChange={(value) => updateField('annualIncome', value)}
          required
        />
      </div>

      {/* Additional Information */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ (Additional Information)</h2>
        
        <FormField
          label="ಇತರ ವಿವರಗಳು"
          englishLabel="Other Details"
          type="textarea"
          value={formData.otherDetails}
          onChange={(value) => updateField('otherDetails', value)}
        />

        <FormField
          label="ಜೀವನ ಸಂಗಾತಿ ಆದ್ಯತೆಗಳು"
          englishLabel="Partner Preferences"
          type="textarea"
          value={formData.partnerPreference}
          onChange={(value) => updateField('partnerPreference', value)}
        />
      </div>

      {/* Family Details */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">ಕುಟುಂಬದ ವಿವರಗಳು (Family Details)</h2>
        
        <FormField
          label="ತಂದೆಯ ಹೆಸರು"
          englishLabel="Father's Name"
          value={formData.father}
          onChange={(value) => updateField('father', value)}
          required
        />

        <FormField
          label="ತಂದೆಯ ಉದ್ಯೋಗ"
          englishLabel="Father's Occupation"
          value={formData.fathersOccupation}
          onChange={(value) => updateField('fathersOccupation', value)}
        />

        <FormField
          label="ತಾಯಿಯ ಹೆಸರು"
          englishLabel="Mother's Name"
          value={formData.mother}
          onChange={(value) => updateField('mother', value)}
          required
        />

        <FormField
          label="ತಾಯಿಯ ಉದ್ಯೋಗ"
          englishLabel="Mother's Occupation"
          value={formData.mothersOccupation}
          onChange={(value) => updateField('mothersOccupation', value)}
        />

        <FormField
          label="ಸಹೋದರಿಯರು"
          englishLabel="Sisters"
          value={formData.sisters}
          onChange={(value) => updateField('sisters', value)}
        />

        <FormField
          label="ಸಹೋದರರು"
          englishLabel="Brothers"
          value={formData.brothers}
          onChange={(value) => updateField('brothers', value)}
        />
      </div>

      {/* Contact Information */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">ಸಂಪರ್ಕ ಮಾಹಿತಿ (Contact Information)</h2>
        
        <FormField
          label="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
          englishLabel="Contact Number"
          type="tel"
          value={formData.contact}
          onChange={(value) => updateField('contact', value)}
          required
        />

        <FormField
          label="ಇಮೇಲ್"
          englishLabel="Email"
          type="email"
          value={formData.email}
          onChange={(value) => updateField('email', value)}
          required
        />

        <FormField
          label="ವಿಳಾಸ"
          englishLabel="Address"
          type="textarea"
          value={formData.address}
          onChange={(value) => updateField('address', value)}
          required
        />
      </div>

    

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white py-4 px-6 rounded-md hover:bg-orange-700 
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
          transform transition-all duration-200 hover:scale-[1.02] text-lg font-semibold
          shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed
          flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
              ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ... (Submitting...)
            </>
          ) : (
            'ನೋಂದಣಿ ಮಾಡಿ (Register)'
          )}
        </button>
      </div>
    </form>
  );
}
