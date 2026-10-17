<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep storefront catalog and pricing rules in `src/lib/menu.ts`, tested alongside it, so every line and WhatsApp order shares one source of truth.
- Preserve the original nutrition data on `/informacoes-nutricionais`; do not derive gram-based nutrient quantities from package volume without validated data.
- Use uploaded brand and meal imagery through asset pointers; never substitute unrelated or generated meal photos for missing real product photographs.
