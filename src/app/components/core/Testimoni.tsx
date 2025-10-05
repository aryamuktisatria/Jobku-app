"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Send, User } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  created_at: string;
}

interface TestimonialFormData {
  name: string;
  comment: string;
  rating: number;
}

const Testimoni = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    comment: "",
    rating: 0,
  });

  // Fetch testimonials dari MySQL
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log('Fetching testimonials from API...');
        const response = await fetch("/api/testimonials");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Testimonials fetched:', data);
        
        if (Array.isArray(data)) {
          setTestimonials(data);
        } else {
          console.error('Expected array but got:', data);
          setTestimonials([]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Fallback ke data dummy jika API error
        setTestimonials([
          {
            id: 1,
            name: "Ahmad Rizki",
            comment: "JobKu sangat membantu saya menemukan pekerjaan impian! Prosesnya cepat dan transparan.",
            rating: 5,
            created_at: new Date().toISOString()
          },
          {
            id: 2,
            name: "Sari Dewi",
            comment: "Platform yang user-friendly dan lowongannya selalu update. Recommended banget!",
            rating: 4,
            created_at: new Date().toISOString()
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto slide carousel
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      console.log('Submitting testimonial:', formData);
      
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Submission response:', result);

      if (response.ok && result.success) {
        setSubmitMessage("✅ Terima kasih! Testimonial Anda berhasil dikirim.");
        setFormData({ name: "", comment: "", rating: 0 });
        
        // Refresh testimonials dari database
        const testimonialsResponse = await fetch("/api/testimonials");
        if (testimonialsResponse.ok) {
          const newTestimonials = await testimonialsResponse.json();
          setTestimonials(newTestimonials);
        }
      } else {
        setSubmitMessage(`❌ ${result.error || "Terjadi kesalahan. Silakan coba lagi."}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage("❌ Terjadi kesalahan jaringan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`size-4 ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Sisa kode component tetap sama...
  // [Keep all the JSX rendering code from your previous version]

  if (isLoading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto mb-16"></div>
          </div>
          <div className="animate-pulse h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F5F0] to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-[#C2A68C] to-[#8B7355] bg-clip-text text-transparent">
              Mereka?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Pengalaman nyata dari ribuan pencari kerja yang telah menemukan karir impian
          </p>
        </div>

        {/* Debug Info */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-sm">
            Total Testimonials: {testimonials.length}
          </div>
        </div>

        {/* Carousel Section */}
        {testimonials.length > 0 ? (
          <div className="mb-20">
            <div className="relative max-w-4xl mx-auto">
              
              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-[#E6D8C3] dark:border-gray-700 shadow-lg"
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 p-8 md:p-12"
                    >
                      <div className="text-center max-w-2xl mx-auto">
                        
                        {/* Rating Stars */}
                        <div className="flex justify-center mb-6">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Comment */}
                                             <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                          {testimonial.comment}
                        </blockquote>


                        {/* Author Info */}
                        <div className="flex items-center justify-center gap-4">
                          <div className="size-12 rounded-full bg-[#E6D8C3] dark:bg-gray-700 flex items-center justify-center text-[#8B7355] dark:text-gray-300">
                            <User className="size-6" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {formatDate(testimonial.created_at)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/80 dark:bg-gray-800/80 
                             border border-[#E6D8C3] dark:border-gray-600 flex items-center justify-center 
                             text-[#8B7355] dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 
                             transition-all duration-300 shadow-lg hover:scale-110"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/80 dark:bg-gray-800/80 
                             border border-[#E6D8C3] dark:border-gray-600 flex items-center justify-center 
                             text-[#8B7355] dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 
                             transition-all duration-300 shadow-lg hover:scale-110"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`size-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-[#C2A68C] scale-125"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 mb-20">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              Belum ada testimonial. Jadilah yang pertama!
            </div>
          </div>
        )}

        {/* Testimonial Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-[#E6D8C3] dark:border-gray-700 shadow-lg">
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Bagikan Pengalaman Anda
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Ceritakan pengalaman Anda menggunakan JobKu
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full px-4 py-3 border border-[#E6D8C3] dark:border-gray-600 rounded-xl 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-[#C2A68C] focus:border-transparent transition-all duration-300"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              {/* Rating Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        formData.rating >= star
                          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      <Star
                        className={`size-6 ${
                          formData.rating >= star ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formData.rating > 0 ? `Rating: ${formData.rating} bintang` : 'Pilih rating'}
                </div>
              </div>

              {/* Comment Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Komentar
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                  minLength={10}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E6D8C3] dark:border-gray-600 rounded-xl 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none
                           focus:ring-2 focus:ring-[#C2A68C] focus:border-transparent transition-all duration-300"
                  placeholder="Bagikan pengalaman Anda menggunakan JobKu..."
                />
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formData.comment.length}/500 karakter
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.rating === 0 || !formData.name || !formData.comment}
                className="w-full py-4 bg-[#C2A68C] hover:bg-[#a58970] disabled:bg-gray-400 
                         text-white font-bold rounded-xl transition-all duration-300 
                         transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed
                         flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full size-5 border-2 border-white border-t-transparent"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="size-5" />
                    Kirim Testimonial
                  </>
                )}
              </button>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`p-4 rounded-xl text-center font-medium ${
                    submitMessage.includes("✅")
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                      : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimoni;