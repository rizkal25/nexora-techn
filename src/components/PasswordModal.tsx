"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Eye, EyeOff, Shield, AlertCircle } from "lucide-react";

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  targetUrl: string;
}

export default function PasswordModal({ isOpen, onClose, onSuccess, targetUrl }: PasswordModalProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Password yang benar (bisa Anda ganti sesuai keinginan)
  const CORRECT_PASSWORD = "nexora2026";

  // Reset state saat modal ditutup
  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setError("");
      setShowPassword(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulasi delay untuk efek loading (opsional)
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        // Simpan status unlock di sessionStorage
        sessionStorage.setItem("nexora-dev-unlocked", "true");
        onSuccess();
        onClose();
      } else {
        setError("Password salah. Silakan coba lagi.");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md pointer-events-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30" />

              {/* Modal Content */}
              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="relative p-6 bg-gradient-to-br from-blue-950/50 to-purple-950/50 border-b border-slate-800">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Area Developer</h3>
                      <p className="text-xs text-slate-400">Diperlukan password untuk mengakses</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg mb-6">
                    <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-blue-400">Akses Terbatas:</strong> Dokumentasi API, SDK, dan resources developer hanya tersedia untuk partner dan klien terdaftar.
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                          }}
                          placeholder="Masukkan password..."
                          className="w-full px-4 py-3 pr-12 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          autoFocus
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4 text-slate-400" />
                          ) : (
                            <Eye className="w-4 h-4 text-slate-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-red-300">{error}</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading || !password}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Memverifikasi...
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Buka Akses
                        </>
                      )}
                    </button>
                  </form>

                  {/* Hint */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-slate-500">
                      Belum punya password?{" "}
                      <a
                        href="/support"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        onClick={onClose}
                      >
                        Hubungi Support
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}