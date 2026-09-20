import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink, X, ArrowLeft, Images } from 'lucide-react';
import { galleryAlbums, type GalleryAlbum, type GalleryItem } from '@/data/portfolio';

// ── Album Grid View ─────────────────────────────────────────────
function AlbumGrid({
  onSelect,
  isInView,
}: {
  onSelect: (album: GalleryAlbum) => void;
  isInView: boolean;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryAlbums.map((album, index) => (
        <motion.div
          key={album.id}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.09 }}
          onClick={() => onSelect(album)}
          className="group cursor-pointer rounded-xl overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-sm hover:border-gold/40 hover:bg-white/[0.06] transition-all duration-300"
        >
          {/* Cover image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-space-dark">
            <img
              src={album.coverImage}
              alt={album.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-black/90 via-space-black/30 to-transparent" />

            {/* Photo count badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-space-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/70">
              <Images className="w-3 h-3 text-gold" />
              {album.photos.length} photos
            </div>

            {/* Album title overlaid on bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-rozha text-lg font-normal text-white leading-tight mb-0.5">
                {album.title}
              </h3>
              <p className="text-xs text-white/60 leading-snug line-clamp-2">{album.subtitle}</p>
            </div>
          </div>

          {/* Meta row */}
          <div className="px-4 py-3 flex items-center justify-between text-[11px] font-mono text-white/50 border-t border-white/8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-gold/70" />
              {album.date}
            </span>
            <span className="flex items-center gap-1.5 truncate max-w-[160px]">
              <MapPin className="w-3 h-3 text-cosmic-blue/70" />
              {album.location}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Single Photo Lightbox ────────────────────────────────────────
function PhotoLightbox({
  photo,
  albumTitle,
  driveLink,
  onClose,
}: {
  photo: GalleryItem;
  albumTitle: string;
  driveLink: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-space-navy border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-space-black/80 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-space-black transition-colors"
          aria-label="Close photo"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Photo */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden max-h-[62vh]">
          <img
            src={photo.image}
            alt={photo.caption}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Caption row */}
        <div className="p-5 bg-space-dark border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-sm text-white font-medium leading-relaxed">{photo.caption}</p>
            <div className="flex items-center gap-4 text-[11px] font-mono text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gold" />
                {photo.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cosmic-blue" />
                {photo.location}
              </span>
            </div>
            <p className="text-[10px] font-mono text-white/30 tracking-widest uppercase">{albumTitle}</p>
          </div>
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gold/20 hover:bg-gold/30 border border-gold/40 text-gold-soft text-xs font-mono tracking-wider transition-colors flex-shrink-0"
          >
            Google Drive Archive
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Album Photo Grid ─────────────────────────────────────────────
function AlbumPhotoGrid({
  album,
  onBack,
}: {
  album: GalleryAlbum;
  onBack: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <div ref={ref}>
      {/* Album header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-5 flex items-center gap-2 text-xs font-mono text-white/50 hover:text-gold-soft transition-colors duration-200 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          All Albums
        </button>

        <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-1">
          // {album.location} · {album.date}
        </p>
        <h2 className="font-rozha text-3xl md:text-4xl font-normal text-white mb-2">
          {album.title}
        </h2>
        <p className="text-white/60 text-sm max-w-xl leading-relaxed">{album.subtitle}</p>

        <div className="mt-4 flex items-center gap-4">
          <span className="text-xs font-mono text-white/40">{album.photos.length} photos</span>
          <a
            href={album.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-gold-soft/70 hover:text-gold-soft transition-colors"
          >
            Full archive on Drive
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>

      {/* Photo grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {album.photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            onClick={() => setSelectedPhoto(photo)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-white/15 bg-white/[0.03] hover:border-gold/40 transition-all duration-300 flex flex-col"
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] overflow-hidden bg-space-dark">
              <img
                src={photo.image}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </div>

            {/* Caption + meta */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <p className="text-xs md:text-sm text-white/85 leading-relaxed mb-3">{photo.caption}</p>
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-gold" />
                  {photo.date}
                </span>
                <span className="flex items-center gap-1.5 truncate max-w-[150px]">
                  <MapPin className="w-3 h-3 text-cosmic-blue" />
                  {photo.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <PhotoLightbox
            photo={selectedPhoto}
            albumTitle={album.title}
            driveLink={album.driveLink}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main GallerySection ──────────────────────────────────────────
export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeAlbum, setActiveAlbum] = useState<GalleryAlbum | null>(null);

  return (
    <section id="gallery" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <AnimatePresence mode="wait">
          {!activeAlbum ? (
            <motion.div
              key="album-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-10 text-center md:text-left"
              >
                <p className="font-mono text-xs text-gold-soft tracking-[0.2em] uppercase mb-2">
                  // Field Archives &amp; Visuals
                </p>
                <h2 className="font-rozha text-3xl md:text-4xl font-normal text-white">
                  Expedition &amp; <span className="text-gradient">Gallery</span>
                </h2>
                <p className="text-white/60 text-sm mt-2 max-w-xl leading-relaxed">
                  Visual logs from observatory visits, telescope prototyping, astrophysics summer schools, and stargazing sessions.
                  Click any album to explore photos.
                </p>
              </motion.div>

              <AlbumGrid onSelect={setActiveAlbum} isInView={isInView} />
            </motion.div>
          ) : (
            <motion.div
              key={`album-${activeAlbum.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AlbumPhotoGrid album={activeAlbum} onBack={() => setActiveAlbum(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
