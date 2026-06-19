# TODO

## Step 1: WhatsApp popup real chat
- Update `src/components/layout/SocialMediaIcons.js` so typing/sending in the popup immediately pre-fills WhatsApp with the encoded typed message (wa.me `text=`).
- Ensure “send” opens WhatsApp with the current message (and keeps existing local messages as optional UI feedback).
- Continue on WhatsApp should also include the message being typed.

## Step 2: WhatsApp logo/profile pic sharing fix
- Ensure the WhatsApp chat/preview uses correct branding where possible (note: WhatsApp profile picture is controlled by WhatsApp business/contact; we can only influence via the chat URL and external metadata).
- Add best-effort workaround: use correct image asset in the popup header (already uses `LexoraLogoWhite.png`) and verify the asset path.

## Step 3: Footer layout adjustments
- Move Social media icons up so they align inline with the second line text (“Legal Execution for Regulated…”) rather than being pushed down by layout.
- Adjust footer column layout so Capabilities and Firm go back to single column each (currently implemented as 2 columns with nested grids).

## Step 4: Validate build
- Run `npm run lint` and `npm run build`.

