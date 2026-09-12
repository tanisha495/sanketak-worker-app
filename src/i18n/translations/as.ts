import type { TranslationDictionary } from "@/i18n/types";

export const as: TranslationDictionary = {
  common: {
    continue: "আগবাঢ়ক",
    goBack: "উভতি যাওক",
    backToHome: "হোমলৈ উভতি যাওক",
    allSites: "সকলো স্থান",
    loadingReports: "ৰিপোৰ্টসমূহ লোড হৈ আছে...",
    loadingAlerts: "সতৰ্কবাণী লোড হৈ আছে...",
    loadingReport: "ৰিপোৰ্ট লোড হৈ আছে...",
  },
  splash: {
    brand: "SANKETAK",
    tagline: "প্ৰতি কণ্ঠ, সুৰক্ষিত কাইলৈৰ বাবে",
    footer: "OIL-ৰ বাবে সুৰক্ষা বুদ্ধিমত্তা",
  },
  language: {
    title: "আপোনাৰ ভাষা বাছনি কৰক",
    subtitle: "Sanketak-ত ব্যৱহাৰ কৰিবলগীয়া ভাষা বাছনি কৰক।",
    helper: "আপুনি পিছত More-ৰ পৰা এইটো সলনি কৰিব পাৰিব।",
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
    home: "হোম",
    reports: "মোৰ ৰিপোৰ্ট",
    alerts: "সতৰ্কবাণী",
    more: "অধিক",
  },
  home: {
    title: "হোম",
    subtitle: "Sanketak worker app",
    placeholder:
      "Startup flow অনুমোদন হোৱাৰ পিছত চূড়ান্ত Home Screen ডিজাইন কৰা হ’ব।",
  },
  report: {
    voiceTitle: "কণ্ঠ ৰিপোৰ্ট",
    voiceSubtitle: "কণ্ঠ-প্ৰথম ৰিপোৰ্টিং placeholder",
    voiceBody:
      "মাইক্ৰ’ফোন interface পিছত যোগ কৰা হ’ব। এতিয়া এই route-এ voice report flow নিশ্চিত কৰে।",
    textTitle: "টেক্সট ৰিপোৰ্ট",
    textSubtitle: "হাতে লিখা ৰিপোৰ্টিং placeholder",
    textBody:
      "টেক্সট ৰিপোৰ্ট form পিছত বনোৱা হ’ব। এই placeholder-এ report navigation path ৰাখিছে।",
    reviewTitle: "ৰিপোৰ্ট পৰ্যালোচনা",
    reviewSubtitle: "কৰ্মী নিশ্চিতকৰণ placeholder",
    reviewBody:
      "জমা দিয়াৰ আগতে Sanketak-এ কি বুজিলে এই screen-ত দেখা যাব। AI বিশ্লেষণ backend service-ৰ পৰা আহিব।",
    photoTitle: "ফটো যোগ কৰক",
    photoSubtitle: "ঐচ্ছিক প্ৰমাণ placeholder",
    photoBody:
      "Camera আৰু image selection এতিয়াও যোগ কৰা হোৱা নাই। এই route photo step-ৰ বাবে ৰখা হৈছে।",
    successTitle: "ৰিপোৰ্ট জমা হ’ল",
    successSubtitle: "নামবিহীন জমা placeholder",
    successBody:
      "জমা ৰিপোৰ্টৰ নিশ্চিতকৰণত anonymous tracking ID ইয়াত দেখা যাব। বৰ্তমানে এই screen-এ success route নিশ্চিত কৰে।",
    continueToReview: "পৰ্যালোচনালৈ যাওক",
    continueToPhoto: "ফটোলৈ যাওক",
    submitMockReport: "Mock ৰিপোৰ্ট জমা কৰক",
    viewMyReports: "মোৰ ৰিপোৰ্ট চাওক",
  },
  reports: {
    title: "মোৰ ৰিপোৰ্ট",
    subtitle: "জমা দিয়া সুৰক্ষা পৰ্যবেক্ষণ আৰু কাৰ্য্যৰ অগ্ৰগতি চাওক।",
    emptyTitle: "এতিয়ালৈ ৰিপোৰ্ট নাই",
    emptyMessage: "এই ডিভাইচৰ পৰা জমা দিয়া ৰিপোৰ্টসমূহ ইয়াত দেখা যাব।",
    startReport: "ৰিপোৰ্ট আৰম্ভ কৰক",
  },
  alerts: {
    title: "সতৰ্কবাণী",
    subtitle: "কৰ্মীৰ বাবে সহজ সুৰক্ষা স্মাৰক আৰু অপাৰেচনেল আপডেট।",
    emptyTitle: "সক্ৰিয় সতৰ্কবাণী নাই",
    emptyMessage: "সম্পৰ্কিত সুৰক্ষা আপডেট থাকিলে ইয়াত দেখা যাব।",
  },
  more: {
    title: "অধিক",
    subtitle: "ভাষা, সহায়, গোপনীয়তা আৰু app তথ্য ইয়াত থাকিব।",
    cardTitle: "Worker app ভিত্তি",
    cardBody:
      "Settings, সহায়, Sanketak সম্পৰ্কে, গোপনীয়তা আৰু feedback screen পৰৱৰ্তী ধাপত যোগ কৰা হ’ব।",
    languageSelection: "ভাষা বাছনি",
  },
  reportDetails: {
    title: "ৰিপোৰ্টৰ বিৱৰণ",
    notFoundTitle: "ৰিপোৰ্ট পোৱা নগ’ল",
    notFoundMessage: "এই ৰিপোৰ্ট mock data-ত পোৱা নগ’ল।",
    timeline: "স্থিতি টাইমলাইন",
    understood: "Sanketak-এ কি বুজিলে",
    activity: "কাৰ্যকলাপ",
    barrierConcern: "সুৰক্ষা বাধাৰ চিন্তা",
    lifeSavingRule: "Life-Saving Rule",
  },
  reportStatus: {
    submitted: "জমা",
    under_review: "পৰ্যালোচনাত",
    action_in_progress: "কাৰ্য্য চলি আছে",
    verified: "যাচাই কৰা",
  },
};
