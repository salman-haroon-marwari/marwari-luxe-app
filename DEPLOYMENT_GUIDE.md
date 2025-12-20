# Marwari Luxe Deployment Guide

## Vercel Deployment

### Prerequisites
1. Vercel account (free tier available)
2. GitHub/GitLab/Bitbucket account connected to Vercel
3. Repository with the Marwari Luxe codebase

### Deployment Steps

#### 1. Connect Repository to Vercel
1. Log in to your Vercel account
2. Click "New Project"
3. Import your Git repository or clone the Marwari Luxe repository
4. Select the root directory of the project

#### 2. Configure Project Settings
- **Framework Preset**: Next.js
- **Root Directory**: ./ (project root)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

#### 3. Environment Variables
Add the following environment variables in Vercel dashboard under Settings > Environment Variables:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_google_analytics_measurement_id
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id
NEXT_PUBLIC_ADSENSE_CLIENT_ID=your_adsense_client_id
```

#### 4. Build and Deploy
1. Click "Deploy"
2. Vercel will automatically detect the Next.js framework
3. The build process will begin and deploy your site
4. Once complete, you'll receive a Vercel URL for your site

### Vercel-Specific Configurations

#### Image Optimization
The project is configured with Cloudinary integration:
```typescript
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/**',
    },
  ],
},
```

#### Serverless Functions
API routes are automatically deployed as serverless functions:
- Health check endpoint: `/api/health`
- Other API routes as needed

#### Edge Network
Vercel's global edge network ensures:
- Fast content delivery worldwide
- Automatic SSL certificates
- DDoS protection
- Global availability

## Namecheap Domain Integration

### Prerequisites
1. Domain registered with Namecheap
2. Vercel project deployed and assigned a domain

### DNS Configuration Steps

#### 1. Access Namecheap Dashboard
1. Log in to your Namecheap account
2. Navigate to "Domain List"
3. Select your domain (e.g., marwariluxe.com)

#### 2. Configure DNS Settings
1. Click "Manage" next to your domain
2. Go to the "Advanced DNS" tab
3. Add the following records:

##### A Records (for apex domain)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 30 min |

##### CNAME Records (for www subdomain)
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | 30 min |

#### 3. Configure Domain on Vercel
1. In Vercel dashboard, go to your project
2. Navigate to Settings > Domains
3. Add your domain (e.g., marwariluxe.com)
4. Add both apex (@) and www versions
5. Vercel will automatically verify DNS configuration

### SSL Certificate
Vercel automatically provisions SSL certificates for custom domains:
- Free Let's Encrypt certificates
- Automatic renewal
- HTTP to HTTPS redirects
- Mixed content protection

## Environment Configuration

### Production Environment
Set production environment variables in Vercel:
```
NODE_ENV=production
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_production_cloud_name
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_production_ga_id
NEXT_PUBLIC_GTM_ID=your_production_gtm_id
NEXT_PUBLIC_ADSENSE_CLIENT_ID=your_production_adsense_id
```

### Preview Environments
Vercel automatically creates preview deployments for:
- Pull requests
- Branch deployments
- Commit previews

Configure environment variables for preview environments as needed.

## Performance Optimization

### Vercel Features Utilized
1. **Automatic Static Optimization**: Pages without server-side data fetching are prerendered
2. **Incremental Static Regeneration**: Content updates without rebuilds
3. **Serverless Functions**: API routes scale automatically
4. **Edge Caching**: Global CDN for static assets
5. **Image Optimization**: Automatic image resizing and formatting

### Cloudinary Integration
Images are served with optimal transformations:
- Auto format selection (f_auto)
- Quality optimization (q_auto)
- Responsive sizing (w_auto)
- Device pixel ratio adaptation (dpr_auto)

### Caching Strategy
1. **Static Assets**: Cached at edge locations
2. **Dynamic Content**: Cached with appropriate TTL
3. **API Responses**: Cached where applicable
4. **Browser Caching**: Proper cache headers for client-side

## Monitoring and Analytics

### Vercel Analytics
Built-in performance monitoring:
- Web Vitals tracking
- Geographic performance data
- Device-specific metrics
- Route performance analysis

### Google Analytics Integration
Universal GA4 setup with:
- Page view tracking
- Event tracking
- Ecommerce tracking
- Enhanced measurement

### Error Monitoring
Integration options:
- Vercel Error Reporting
- Third-party services (Sentry, etc.)
- Custom error boundaries

## CI/CD Pipeline

### Automated Deployments
1. **Production**: Merges to main branch deploy to production
2. **Preview**: Pull requests create preview deployments
3. **Development**: Branch pushes create development deployments

### Build Process
1. Code checkout
2. Dependency installation
3. Environment variable injection
4. Build execution (`npm run build`)
5. Artifact deployment
6. Health checks
7. Cache invalidation

## Backup and Recovery

### Version Control
- Git repository as source of truth
- Branch protection rules
- Pull request reviews
- Release tagging

### Database Backups
For any future database integrations:
- Automated backup schedules
- Point-in-time recovery
- Cross-region replication
- Export capabilities

## Troubleshooting

### Common Deployment Issues

#### DNS Not Resolving
1. Verify DNS records match Vercel requirements
2. Check TTL settings (may take up to 48 hours)
3. Use `dig` or `nslookup` to verify propagation

#### SSL Certificate Issues
1. Ensure DNS is properly configured
2. Wait for automatic certificate provisioning
3. Check for mixed content warnings

#### Environment Variables Not Loading
1. Verify variable names match code expectations
2. Check environment targeting (Production/Preview/Development)
3. Redeploy after adding new variables

#### Build Failures
1. Check build logs in Vercel dashboard
2. Verify Node.js version compatibility
3. Ensure all dependencies are correctly specified

### Performance Issues

#### Slow Initial Load
1. Analyze with Lighthouse/PageSpeed Insights
2. Optimize Largest Contentful Paint (LCP)
3. Reduce JavaScript bundle size
4. Implement proper image optimization

#### High Response Times
1. Check API route performance
2. Optimize database queries
3. Implement caching strategies
4. Consider CDN for static assets

## Scaling Considerations

### Traffic Handling
Vercel automatically scales:
- Serverless functions based on demand
- Edge network for global distribution
- Database connections (if using Vercel Postgres)

### Cost Management
Monitor usage:
- Serverless function execution time
- Bandwidth consumption
- Build minutes
- Storage usage

## Security Best Practices

### Vercel Security Features
- Automatic HTTPS
- DDoS protection
- Rate limiting
- Security headers

### Application Security
- Content Security Policy implementation
- Input validation
- Authentication/authorization
- Secure headers configuration

## Maintenance Schedule

### Weekly Tasks
- Monitor performance metrics
- Check for build failures
- Review error logs
- Update dependencies

### Monthly Tasks
- Review security settings
- Audit environment variables
- Check SSL certificate expiration
- Review billing and usage

### Quarterly Tasks
- Performance optimization review
- SEO audit
- Backup verification
- Disaster recovery testing

This deployment guide ensures smooth, reliable hosting of the Marwari Luxe website with optimal performance, security, and scalability.