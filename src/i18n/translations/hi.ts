import type { TranslationDictionary } from "@/i18n/types";

export const hi: TranslationDictionary = {
  common: {
    continue: "जारी रखें",
    goBack: "वापस जाएं",
    backToHome: "होम पर वापस जाएं",
    allSites: "सभी स्थल",
    loadingReports: "रिपोर्टें लोड हो रही हैं...",
    loadingAlerts: "अलर्ट लोड हो रहे हैं...",
    loadingReport: "रिपोर्ट लोड हो रही है...",
  },
  splash: {
    brand: "SANKETAK",
    tagline: "हर आवाज़, सुरक्षित कल के लिए",
    footer: "OIL के लिए सुरक्षा इंटेलिजेंस",
  },
  language: {
    title: "अपनी भाषा चुनें",
    subtitle: "Sanketak में उपयोग करने के लिए भाषा चुनें।",
    helper: "आप इसे बाद में More से बदल सकते हैं।",
    englishName: "English",
    englishLabel: "English",
    englishSupport: "Continue in English",
    hindiName: "हिन्दी",
    hindiLabel: "Hindi",
    hindiSupport: "हिन्दी में जारी रखें",
    assameseName: "অসমীয়া",
    assameseLabel: "Assamese",
    assameseSupport: "অসমীয়াত আগবাঢ়ক",
  },
  navigation: {
    home: "होम",
    reports: "मेरी रिपोर्टें",
    alerts: "अलर्ट",
    more: "अन्य",
  },
  home: {
    title: "होम",
    subtitle: "Sanketak वर्कर ऐप",
    placeholder:
      "स्टार्टअप flow स्वीकृत होने के बाद अंतिम Home Screen डिज़ाइन की जाएगी।",
  },
  report: {
    voiceTitle: "वॉइस रिपोर्ट",
    voiceSubtitle: "आवाज़-प्रथम रिपोर्टिंग प्लेसहोल्डर",
    voiceBody:
      "माइक्रोफोन इंटरफेस बाद में लागू होगा। अभी यह route voice report flow की पुष्टि करता है।",
    textTitle: "टेक्स्ट रिपोर्ट",
    textSubtitle: "मैनुअल रिपोर्टिंग प्लेसहोल्डर",
    textBody:
      "टेक्स्ट रिपोर्ट फॉर्म बाद में बनाया जाएगा। अभी यह report navigation path उपलब्ध रखता है।",
    reviewTitle: "रिपोर्ट समीक्षा",
    reviewSubtitle: "वर्कर पुष्टि प्लेसहोल्डर",
    reviewBody:
      "यह स्क्रीन जमा करने से पहले दिखाएगी कि Sanketak ने क्या समझा। AI विश्लेषण backend service से आएगा।",
    photoTitle: "फोटो जोड़ें",
    photoSubtitle: "वैकल्पिक प्रमाण प्लेसहोल्डर",
    photoBody:
      "कैमरा और image selection अभी लागू नहीं हैं। यह route photo step के लिए रखा गया है।",
    successTitle: "रिपोर्ट जमा हुई",
    successSubtitle: "अनाम जमा प्लेसहोल्डर",
    successBody:
      "जमा रिपोर्ट की पुष्टि यहां anonymous tracking ID दिखाएगी। अभी यह success route की पुष्टि करता है।",
    continueToReview: "समीक्षा पर जाएं",
    continueToPhoto: "फोटो पर जाएं",
    submitMockReport: "Mock रिपोर्ट जमा करें",
    viewMyReports: "मेरी रिपोर्टें देखें",
  },
  reports: {
    title: "मेरी रिपोर्टें",
    subtitle: "जमा की गई सुरक्षा टिप्पणियों और कार्रवाई की प्रगति देखें।",
    emptyTitle: "अभी कोई रिपोर्ट नहीं",
    emptyMessage: "इस डिवाइस से जमा की गई रिपोर्टें यहां दिखेंगी।",
    startReport: "रिपोर्ट शुरू करें",
  },
  alerts: {
    title: "अलर्ट",
    subtitle: "वर्करों के लिए सरल सुरक्षा याद दिलाने वाली जानकारी और अपडेट।",
    emptyTitle: "कोई सक्रिय अलर्ट नहीं",
    emptyMessage: "संबंधित सुरक्षा अपडेट उपलब्ध होने पर यहां दिखेंगे।",
  },
  more: {
    title: "अन्य",
    subtitle: "भाषा, सहायता, गोपनीयता और ऐप जानकारी यहां रहेगी।",
    cardTitle: "वर्कर ऐप आधार",
    cardBody:
      "सेटिंग्स, सहायता, Sanketak के बारे में, गोपनीयता और फीडबैक स्क्रीन आगे चरणों में जोड़ी जाएंगी।",
    languageSelection: "भाषा चयन",
  },
  reportDetails: {
    title: "रिपोर्ट विवरण",
    notFoundTitle: "रिपोर्ट नहीं मिली",
    notFoundMessage: "यह रिपोर्ट mock data में नहीं मिली।",
    timeline: "स्थिति टाइमलाइन",
    understood: "Sanketak ने क्या समझा",
    activity: "गतिविधि",
    barrierConcern: "सुरक्षा बाधा चिंता",
    lifeSavingRule: "Life-Saving Rule",
  },
  reportStatus: {
    submitted: "जमा",
    under_review: "समीक्षा में",
    action_in_progress: "कार्रवाई जारी",
    verified: "सत्यापित",
  },
};
