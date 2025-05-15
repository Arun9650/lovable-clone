import Link from "next/link"

export function Footer() {
  return (
    <footer className="glass py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lovable</h3>
            <p className="text-white/70">Build something lovable with AI-powered development tools.</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-white/70 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-white/70 hover:text-white">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">© 2025 Lovable. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-white/70 hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              GitHub
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
