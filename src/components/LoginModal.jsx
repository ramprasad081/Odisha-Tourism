import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  ShieldCheck,
  MessageSquare,
  RefreshCw,
  Edit2
} from 'lucide-react';
import { KonarkWheelIcon } from './OdishaLogo';

// Play a gentle notification sound when OTP SMS arrives using Web Audio API
function playSmsChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08); // A5
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch {
    // Audio context not allowed without interaction or unsupported
  }
}

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [authMethod, setAuthMethod] = useState('phone'); // 'phone' | 'email'
  
  // Contact & OTP State
  const [fullName, setFullName] = useState('');
  const [contactType, setContactType] = useState('phone'); // 'phone' | 'email'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [otpStep, setOtpStep] = useState('enter_phone'); // 'enter_phone' | 'enter_otp'
  const [enteredOtp, setEnteredOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [smsNotification, setSmsNotification] = useState(null);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const timerRef = useRef(null);

  // Countdown timer for OTP resend
  useEffect(() => {
    if (otpStep === 'enter_otp' && countdown > 0) {
      timerRef.current = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timerRef.current);
  }, [otpStep, countdown]);

  if (!isOpen) return null;

  // Trigger Send OTP to the mobile number or email
  const handleSendOtp = (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your Full Name.');
      return;
    }

    const cleanNum = phoneNumber.replace(/\D/g, '');
    if (cleanNum.length !== 10) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(newOtp);
      setOtpStep('enter_otp');
      setCountdown(30);
      setCanResend(false);
      setEnteredOtp('');

      playSmsChime();
      setSmsNotification({
        sender: 'ODISHA-GOV',
        recipientName: fullName.trim(),
        targetText: `+91 ${cleanNum}`,
        otp: newOtp,
        time: 'Just now'
      });
    }, 600);
  };

  // Verify the entered OTP
  const handleVerifyOtp = (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    if (enteredOtp !== generatedOtp) {
      setErrorMsg('Invalid OTP. Please enter the correct verification code.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const cleanNum = phoneNumber.replace(/\D/g, '');
      const travelerName = fullName.trim() || 'Traveler';
      const initials = travelerName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'TR';
      onLogin({
        name: travelerName,
        phone: cleanNum ? `+91 ${cleanNum}` : '',
        email: contactType === 'email' && email ? email : (cleanNum ? `${cleanNum}@traveler.odisha.in` : ''),
        avatar: initials,
        memberSince: '2026'
      });
      setSmsNotification(null);
    }, 500);
  };

  // Auto-fill OTP from SMS alert
  const handleAutoFillOtp = () => {
    if (generatedOtp) {
      setEnteredOtp(generatedOtp);
      setErrorMsg('');
    }
  };

  // Resend OTP
  const handleResendOtp = () => {
    if (!canResend) return;
    handleSendOtp();
  };

  // Email/Password login
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!fullName.trim()) {
      setErrorMsg('Please enter your Name first.');
      return;
    }
    if (!email || !password) {
      setErrorMsg('Please enter your email and password.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const travelerName = fullName.trim();
      const initials = travelerName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'TR';
      onLogin({
        name: travelerName,
        email: email,
        phone: phoneNumber ? `+91 ${phoneNumber.replace(/\D/g, '')}` : '',
        avatar: initials,
        memberSince: '2026'
      });
    }, 500);
  };

  // 1-Click Fast Login
  const handleFastDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const travelerName = fullName.trim() || 'Ananya Mishra';
      const initials = travelerName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'AM';
      const cleanNum = phoneNumber.replace(/\D/g, '') || '9876543210';
      onLogin({
        name: travelerName,
        phone: `+91 ${cleanNum}`,
        email: 'traveler@odisha.gov.in',
        avatar: initials,
        memberSince: '2026'
      });
      setSmsNotification(null);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Incoming Real-Time Simulated SMS Push Banner */}
      {smsNotification && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-md animate-bounce-short">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl p-4 shadow-2xl shadow-emerald-950/40 text-white flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black tracking-wider text-emerald-400 uppercase">
                  SMS from {smsNotification.sender}
                </span>
                <span className="text-[10px] text-slate-400">{smsNotification.time}</span>
              </div>
              <p className="text-xs text-slate-200 mt-1 leading-snug">
                Your Odisha Tourism verification code is <strong className="text-amber-400 font-extrabold text-sm tracking-wider">{smsNotification.otp}</strong> for <span className="text-emerald-300 font-mono">+91 {smsNotification.phone}</span>. Valid for 10 min.
              </p>
              <div className="flex items-center gap-2 mt-2.5">
                <button
                  type="button"
                  onClick={handleAutoFillOtp}
                  className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-colors shadow-sm cursor-pointer"
                >
                  ⚡ Auto-Fill Code ({smsNotification.otp})
                </button>
                <button
                  type="button"
                  onClick={() => setSmsNotification(null)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 text-xs cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-white/15 shadow-2xl overflow-hidden z-10 animate-scale-up text-white">
        
        {/* Top Header Banner */}
        <div className="relative px-6 pt-6 pb-5 bg-gradient-to-br from-emerald-900/60 via-slate-900 to-slate-900 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-500 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center p-1">
                  <KonarkWheelIcon className="w-full h-full" animated={false} />
                </div>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white font-display">
                  Traveler Portal Login
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                  Official Odisha Tourism Gateway
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Authentication Method Selector */}
          <div className="flex p-1 bg-slate-950/60 rounded-xl border border-white/10 mt-5">
            <button
              type="button"
              onClick={() => {
                setAuthMethod('phone');
                setErrorMsg('');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                authMethod === 'phone'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Number</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMethod('email');
                setErrorMsg('');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                authMethod === 'email'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email & Password</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <X className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* PHONE OTP AUTHENTICATION */}
          {authMethod === 'phone' && (
            <>
              {otpStep === 'enter_phone' ? (
                /* Step 1: Full Name, then Number or Email */
                <form onSubmit={handleSendOtp} className="space-y-3.5">
                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-950/70 rounded-xl border border-white/15 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* 2. Right under Name: Mobile Number */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Mobile Number
                    </label>
                    <div className="flex items-center gap-2">
                      {/* Fixed +91 Country Badge */}
                      <div className="px-3 py-2.5 bg-slate-950/90 rounded-xl border border-white/15 text-xs font-bold text-emerald-300 flex items-center gap-1.5 shrink-0 select-none">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      
                      {/* Number Input */}
                      <div className="relative flex-1">
                        <input
                          type="tel"
                          maxLength={10}
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full px-3.5 py-2.5 bg-slate-950/70 rounded-xl border border-white/15 text-white font-mono text-sm tracking-wider placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 mt-1.5">
                      We will send an instant 4-digit verification OTP to your mobile number.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 cursor-pointer transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Sending OTP...</span>
                    ) : (
                      <>
                        <span>Send OTP </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {/* Instant 1-Click Login Shortcut */}
                  <div className="pt-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={handleFastDemoLogin}
                      className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-amber-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Instant 1-Click Demo Login</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Step 2: Enter & Verify OTP */
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">OTP Sent to</span>
                      <span className="text-xs font-bold text-white block">
                        {fullName}
                      </span>
                      <span className="text-xs font-bold text-emerald-300 font-mono">
                        +91 {phoneNumber}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setOtpStep('enter_phone');
                        setErrorMsg('');
                        setSmsNotification(null);
                      }}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 underline cursor-pointer"
                    >
                      <Edit2 className="w-3 h-3" />
                      <span>Change</span>
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Enter 4-Digit OTP
                      </label>
                      {generatedOtp && (
                        <button
                          type="button"
                          onClick={handleAutoFillOtp}
                          className="text-[11px] font-bold text-amber-300 hover:underline cursor-pointer"
                        >
                          Auto-fill: {generatedOtp}
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      maxLength={4}
                      autoFocus
                      required
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="••••"
                      className="w-full py-2.5 px-4 bg-slate-950/90 rounded-xl border border-emerald-500/50 text-white font-mono text-center text-xl tracking-[0.5em] focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  {/* Resend Countdown */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    {canResend ? (
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Resend OTP</span>
                      </button>
                    ) : (
                      <span>Resend OTP in <strong className="text-slate-200">{countdown}s</strong></span>
                    )}
                    <span className="text-[10px] text-slate-500">OTP valid for 10 min</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || enteredOtp.length !== 4}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Verifying OTP...</span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        <span>Verify OTP &amp; Log In</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </>
          )}

          {/* EMAIL & PASSWORD AUTHENTICATION */}
          {authMethod === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-3.5">
              {/* 1. First: Full Name */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  1. Full Name / Traveler Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name (e.g. Ananya Mishra)"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-950/70 rounded-xl border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* 2. After Name: Email Address */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  2. Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-950/70 rounded-xl border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 bg-slate-950/70 rounded-xl border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 cursor-pointer transition-all disabled:opacity-70"
              >
                {loading ? <span>Signing in...</span> : <span>Log In with Email</span>}
              </button>
            </form>
          )}

          {/* Footer badge */}
          <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Official Odisha Tourism Secure Gateway • Indian Numbers (+91)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
