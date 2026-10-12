import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface ConfidenceAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectKeynote: (topic: string) => void;
}

export const ConfidenceAuditModal: React.FC<ConfidenceAuditModalProps> = ({
  isOpen,
  onClose,
  onSelectKeynote,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (!isOpen) return null;

  const questions = [
    {
      title: 'High-Stakes Pitches & Boardroom Entry',
      question: 'When entering a high-stakes negotiation or executive presentation, what is your immediate internal dialogue?',
      options: [
        { text: 'I feel total certainty in my value and command the room immediately.', points: 3 },
        { text: 'I prepare obsessively, but imposter syndrome creeps in right before I start.', points: 2 },
        { text: 'I often feel overwhelmed by the pressure and worry about being judged.', points: 1 },
      ],
    },
    {
      title: 'Navigating Workplace Resistance & Villains',
      question: 'When you encounter toxic politics, unfair criticism, or unexpected setbacks from stakeholders:',
      options: [
        { text: 'I detach emotionally, activate the BAK framework, and turn the friction into leverage.', points: 3 },
        { text: 'I defend my ground, but the conflict drains my mental energy for days.', points: 2 },
        { text: 'I tend to shrink back to avoid conflict, even when I know I am right.', points: 1 },
      ],
    },
    {
      title: 'Taking Audacious Strategic Risks',
      question: 'When an ambitious career opportunity or innovative idea appears:',
      options: [
        { text: 'I jump before I feel 100% ready and figure out the wings on the way down.', points: 3 },
        { text: 'I wait until I have 90% certainty and external permission before moving.', points: 2 },
        { text: 'I analyze all the worst-case failure scenarios until the window passes.', points: 1 },
      ],
    },
    {
      title: 'Advocating For Your Market Value',
      question: 'When negotiating compensation, project resources, or pricing with clients:',
      options: [
        { text: 'I state my premium numbers without flinching and never apologize for my ROI.', points: 3 },
        { text: 'I negotiate reasonably, but frequently offer discounts too early.', points: 2 },
        { text: 'I feel deeply uncomfortable asking for money and accept whatever is offered.', points: 1 },
      ],
    },
  ];

  const handleSelectOption = (points: number) => {
    const updated = [...answers, points];
    setAnswers(updated);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length); // Results screen
    }
  };

  const resetAudit = () => {
    setCurrentStep(0);
    setAnswers([]);
  };

  // Compute profile
  const totalScore = answers.reduce((a, b) => a + b, 0);
  let archetype = 'The Catalyst Leader';
  let recommendedTopic = 'The Confidence Creator: Elevate Your Mindset & Take Unstoppable Action';
  let prescription =
    'You possess high foundational confidence. Your next frontier is amplifying your presence to mentor others and turn disruption into category dominance.';

  if (totalScore <= 6) {
    archetype = 'The Awakening Powerhouse';
    recommendedTopic = 'Overcome Your Villains: The 3-Step BAK Framework for Breakthroughs';
    prescription =
      'You have massive latent potential, but hesitation and fear of external criticism are keeping you from owning your worth. Implementing Heather’s 3-Step BAK method will dismantle imposter syndrome immediately.';
  } else if (totalScore <= 9) {
    archetype = 'The Strategic Contender';
    recommendedTopic = 'The Confident Sales Team: Closing Multi-Million Dollar Deals with Authenticity';
    prescription =
      'You perform well under normal conditions, but high-stakes friction or boundary-setting causes self-doubt. Training your confidence muscle daily will unlock the next executive level.';
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-[rgba(217,217,217,0.8)] rounded-sm shadow-2xl p-6 sm:p-8 overflow-hidden font-body">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(217,217,217,0.7)]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E9202E]" />
            <span className="text-xs uppercase tracking-[0.18em] text-[#E9202E] font-semibold">
              Heather Monahan Confidence Audit
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#4D4D4D] hover:text-[#1A1A1A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentStep < questions.length ? (
          <div>
            {/* Progress bar */}
            <div className="flex items-center justify-between text-xs text-[#4D4D4D] mb-2 font-medium">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span className="text-[#E9202E] font-semibold">
                {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full h-1 bg-[#F8EEF0] rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-[#E9202E] transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            <p className="text-xs text-[#E9202E] font-semibold mb-1 uppercase tracking-[0.16em]">
              {questions[currentStep].title}
            </p>
            <h3 className="text-lg sm:text-xl font-serif-display font-medium text-[#1A1A1A] mb-6 leading-snug">
              {questions[currentStep].question}
            </h3>

            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.points)}
                  className="w-full text-left p-4 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] hover:border-[#E88A90] hover:bg-[#F8EEF0]/40 text-xs sm:text-sm text-[#1A1A1A] transition-all cursor-pointer group shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-[rgba(217,217,217,0.9)] flex items-center justify-center text-[10px] text-[#4D4D4D] group-hover:border-[#E9202E] group-hover:text-[#E9202E] shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="text-center animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-12 h-12 text-[#E9202E] mx-auto mb-3" />
            <p className="text-xs uppercase tracking-[0.18em] text-[#4D4D4D] font-medium">Your Leadership Diagnosis</p>
            <h3 className="text-2xl font-serif-display font-medium text-[#1A1A1A] mt-1 mb-2">
              {archetype}
            </h3>
            <p className="text-xs sm:text-sm text-[#4D4D4D] font-normal leading-[1.7] max-w-md mx-auto mb-6">
              {prescription}
            </p>

            <div className="p-4 rounded-sm bg-[#F8EEF0] border border-[rgba(232,138,144,0.5)] text-left mb-6">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#E9202E] font-semibold block mb-1">
                Recommended Heather Monahan Keynote:
              </span>
              <p className="text-sm font-serif-display font-medium text-[#1A1A1A]">
                {recommendedTopic}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onSelectKeynote(recommendedTopic);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-[0.08em] rounded-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>Inquire About This Keynote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={resetAudit}
                className="inline-flex items-center gap-1.5 text-xs text-[#4D4D4D] hover:text-[#1A1A1A] py-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Audit</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
