/**
 * Re-exports the shared OTLP/HTTP (JSON) span exporter from @space/runtime so
 * the API and Temporal workers use one implementation without duplicating it.
 */
export {
  createOtlpSpanExporter,
  otlpSpanExporterFromEnv,
  otlpTraceRequest,
  otlpTracesUrl,
  type OtlpSpan,
  type OtlpSpanExporterOptions,
  type OtlpSpanKind,
  type ServerSpan,
  type SpanExporter,
  type SpanExporterStats,
  type SpanLink
} from "@space/runtime";
