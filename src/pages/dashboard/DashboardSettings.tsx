
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { mockUsers } from '@/data/mockUsers';
import { useToast } from '@/components/ui/use-toast';

const DashboardSettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Find the user's data from mock data
  const userDetails = mockUsers.find(u => u.username === user?.username);
  
  const [profileData, setProfileData] = useState({
    displayName: userDetails?.displayName || '',
    bio: userDetails?.bio || '',
    avatar: userDetails?.avatar || '',
  });
  
  const [socialLinks, setSocialLinks] = useState({
    website: userDetails?.socialLinks?.website || '',
    twitter: userDetails?.socialLinks?.twitter || '',
    linkedin: userDetails?.socialLinks?.linkedin || '',
    github: userDetails?.socialLinks?.github || '',
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = () => {
    // In a real app, this would make an API call to save the profile data
    console.log('Saving profile:', profileData);
    
    // Update the mock user data (this is just for demo purposes)
    if (userDetails) {
      userDetails.displayName = profileData.displayName;
      userDetails.bio = profileData.bio;
      userDetails.avatar = profileData.avatar;
    }
    
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been saved successfully.',
    });
  };

  const handleSaveSocialLinks = () => {
    // In a real app, this would make an API call to save the social links
    console.log('Saving social links:', socialLinks);
    
    // Update the mock user data (this is just for demo purposes)
    if (userDetails && userDetails.socialLinks) {
      userDetails.socialLinks.website = socialLinks.website;
      userDetails.socialLinks.twitter = socialLinks.twitter;
      userDetails.socialLinks.linkedin = socialLinks.linkedin;
      userDetails.socialLinks.github = socialLinks.github;
    }
    
    toast({
      title: 'Social Links Updated',
      description: 'Your social links have been saved successfully.',
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and portfolio settings</p>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="social">Social Links</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your profile information that will be displayed on your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div>
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profileData.avatar} alt={profileData.displayName} />
                    <AvatarFallback>{profileData.displayName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <Label htmlFor="avatar">Profile Picture URL</Label>
                    <Input
                      id="avatar"
                      name="avatar"
                      value={profileData.avatar}
                      onChange={handleProfileChange}
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      name="displayName"
                      value={profileData.displayName}
                      onChange={handleProfileChange}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={profileData.bio}
                      onChange={handleProfileChange}
                      placeholder="Write a short bio about yourself"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveProfile}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>
                Add your social media links to connect with your audience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    value={socialLinks.website}
                    onChange={handleSocialLinksChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                      twitter.com/
                    </span>
                    <Input
                      id="twitter"
                      name="twitter"
                      value={socialLinks.twitter}
                      onChange={handleSocialLinksChange}
                      placeholder="yourusername"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                      linkedin.com/in/
                    </span>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={socialLinks.linkedin}
                      onChange={handleSocialLinksChange}
                      placeholder="yourusername"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                      github.com/
                    </span>
                    <Input
                      id="github"
                      name="github"
                      value={socialLinks.github}
                      onChange={handleSocialLinksChange}
                      placeholder="yourusername"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveSocialLinks}>
                  Save Links
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Manage your account details and security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user?.email || ''}
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">
                    Your email address is used for login and notifications.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={user?.username || ''}
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">
                    Your username is used for your portfolio URL.
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-medium mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div>
                    <Button>
                      Update Password
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-medium mb-4 text-destructive">Danger Zone</h3>
                <p className="text-muted-foreground mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSettings;
