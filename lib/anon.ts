export function getAnonId() {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("safe_space_anon_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("safe_space_anon_id", id);
  }
  return id;
}
